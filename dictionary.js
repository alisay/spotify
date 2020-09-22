const key = require('./config.js');
const Backend = require('./backend.js');
const natural = require('natural');
const emotions = require('./emotions.json')
const spellcheck = new natural.Spellcheck(emotions.emotions)
// const classifier = new natural.BayesClassifier();
// const tokeniser = new natural.WordTokenizer();

// console.log(tokeniser.tokenize("I am a sad egg"));

natural.PorterStemmer.attach();
const stems = "I would prefer to be more cheerful tbh".tokenizeAndStem();

// console.log(spellcheck.getCorrections(stems, 2));

const antonymFinder = (word)=>{
    const thesaurus = new Backend();
    thesaurus.setBaseUrl("https://www.dictionaryapi.com/api/v3/references/thesaurus/json")
    return thesaurus.get(`/${word}?key=${key.api}`)
    .then(data=> data[0]["meta"]["ants"])
    .then(data=>showAntonyms(data))
    .catch(console.log);
}

const showAntonyms = (data)=>{
    try{
        if(data.length<1){
        throw new Error("no antonyms")
    }
    console.log(data[0][0]);
}
    catch(err){
        console.log(err);
    }
}

// antonymFinder("miserable");