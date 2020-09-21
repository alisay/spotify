const fetch = require('node-fetch');
const api = require('./config.js');


//given a word, it finds the opposite
const antonymFinder = (word) =>{
    fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${api.api}`)
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(err => console.log(err));
    }

antonymFinder("sad");