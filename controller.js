const fetch = require('node-fetch');

function getSongQuery(query) {
    fetch("https://searchly.asuarez.dev/api/v1/song/search?query=" + query) //QUERY CAN BE ANYTHING
    // fetch("https://searchly.asuarez.dev/api/v1/similarity/by_song?song_id=" + query) //SONG ID NEEDED
    // fetch("https://searchly.asuarez.dev/api/v1/similarity/by_content", {method: 'POST', content: query.json})
        .then(response => response.json())
        .then(data => console.log(data.response.results))
        .catch(err => console.log(err));
}

function getSongId(query) {
    // fetch("https://searchly.asuarez.dev/api/v1/song/search?query=" + query) //QUERY CAN BE ANYTHING
    fetch("https://searchly.asuarez.dev/api/v1/similarity/by_song?song_id=" + query) //SONG ID NEEDED
    // fetch("https://searchly.asuarez.dev/api/v1/similarity/by_content", {method: 'POST', content: query.json})
        .then(response => response.json())
        .then(data => console.log(data.response.similarity_list))
        .catch(err => console.log(err));
}
getSongQuery('used, the - say days ago')
// getSongId(123)
