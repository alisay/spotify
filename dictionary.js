const key = require('./config.js');
const Backend = require('./backend.js');

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

antonymFinder("miserable");