const fetch = require('node-fetch');

function getSongQuery(query) {
    fetch("https://searchly.asuarez.dev/api/v1/song/search?query=" + query) //QUERY CAN BE ANYTHING
        .then(response => response.json())
        .then(data => console.log(data.response.results))
        .catch(err => console.log(err));
}

function getSongId(songId) {
    fetch("https://searchly.asuarez.dev/api/v1/similarity/by_song?song_id=" + songId) //SONG ID NEEDED
        .then(response => response.json())
        .then(data => console.log(data.response.similarity_list))
        .catch(err => console.log(err));
}
getSongQuery('')
getSongId()
