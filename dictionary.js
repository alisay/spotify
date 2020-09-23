const key = require('./config.js');
const Backend = require('./backend.js');
const natural = require('natural');
const dictionary = require('./emotions.js');
const emotions = dictionary.dictionary[0]["emotions"]

// const classifier = new natural.BayesClassifier();
// const tokeniser = new natural.WordTokenizer();

// console.log(tokeniser.tokenize("I am a sad egg"));

// const stems = "I would prefer to be more abhorrent tbh".tokenizeAndStem();
// console.log(spellcheck.getCorrections(stems[0],2));

const tokeniser = (sentence)=>{
    natural.PorterStemmer.attach();
    return sentence.tokenizeAndStem();
}
const spellChecker = (words)=>{
    const spellcheck = new natural.Spellcheck(emotions)
    const moods = spellcheck.getCorrections((words.slice(0, 2)),2);
    if (moods[0]==null){
        const hacky = emotions[Math.floor(Math.random() * (emotions.length-1))]
        return hacky;
    }
    console.log(`Your mood is ${moods[0]}`)
    return moods[0];
}

const antonymFinder = (word)=>{
    const thesaurus = new Backend();
    thesaurus.setBaseUrl("https://api.datamuse.com/words?rel_ant=")
    return thesaurus.get(`${word}&max=3`)
    .then(data=>showAntonyms(data, word))
    .catch(console.log);
}

const continuedAntonymFinder = (word)=>{
    const thesaurus = new Backend();
    thesaurus.setBaseUrl("https://www.dictionaryapi.com/api/v3/references/thesaurus/json")
    return thesaurus.get(`/${word}?key=${key.api}`)
    .then(data=> data[0]["meta"]["ants"])
    .then(data=>showTheseOnesTho(data))
    .catch(console.log)
}

const showAntonyms = (data, word)=>{
    try{
        if(data.length<1){
            // continuedAntonymFinder(word)
            return word;
        }
        else {
            return data[0].word;
        }
    }
    catch(err){
        console.log(err);
    }   
}

const showTheseOnesTho = (data)=>{
    try{
        if(data.length<1){
        throw "There's no opposite to that feeling"
    }
    randomIndex = Math.floor(Math.random() * data.length)
    const newData = data[randomIndex][(Math.floor(Math.random() * data[randomIndex].length))];
    return newData;
}
    catch(err){
        console.log(err);
    }   
}

// antonymFinder("angry");

module.exports = {
    tokeniser, spellChecker, antonymFinder, continuedAntonymFinder
}
