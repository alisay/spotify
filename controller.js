const fetch = require('node-fetch');
const open = require('open');

function getSongQuery(query) {
    fetch("https://searchly.asuarez.dev/api/v1/song/search?query=" + query) //QUERY CAN BE ANYTHING
        .then(response => response.json())
        .then(data => {
            let randomNum = Math.floor(Math.random() * (data.response.results.length))
            getAppleJson(data.response.results[randomNum].name.split(' ').join('+'))
        })
        .catch(err => console.log(err));
}

// function getSongId(songId) {
//     fetch("https://searchly.asuarez.dev/api/v1/similarity/by_song?song_id=" + songId) //SONG ID NEEDED
//         .then(response => response.json())
//         .then(data => console.log(data.response.similarity_list))
//         .catch(err => console.log(err));
// }

function getAppleJson(song) {
    fetch("https://itunes.apple.com/search?term=" + song + "&entity=song")
        .then(response => response.json())
        .then(data => open(data.results[0].trackViewUrl))
        .catch(err => console.log(err))
}

getSongQuery('happy')