const key = require('./config.js');
const Backend = require('./backend.js');

const antonymFinder = (word)=>{
    const thesaurus = new Backend();
    thesaurus.setBaseUrl("https://www.dictionaryapi.com/api/v3/references/thesaurus/json")
    return thesaurus.get(`/${word}?key=${key.api}`)
    .then(data=> console.log(data[0]["meta"]["ants"]))
    .catch(console.log);
}

// const showAntonyms = ()=>{

// }

console.log(antonymFinder("happy"));