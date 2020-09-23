const fetch = require('node-fetch');
const open = require('open');

// THESE WERE CALLING SEARCHLY BEFORE TO THEN SEARCH FOR ITUNES BUT IT KEPT FINDING
// ERRORS WHEN A SONG WASNT ON ITUNES OR DIDNT HAVE A MATCH TO MOOD

// function getSongQuery(query) {
//     fetch("https://searchly.asuarez.dev/api/v1/song/search?query=" + query) //QUERY CAN BE ANYTHING
//         .then(response => response.json())
//         .then(data => {
//             let randomNum = Math.floor(Math.random() * (data.response.results.length))
//             getAppleJson(data.response.results[randomNum].name.split(' ').join('+'))
//         })
//         .catch(err => console.log(err));
// }
// function getSongId(songId) {
//     fetch("https://searchly.asuarez.dev/api/v1/similarity/by_song?song_id=" + songId) //SONG ID NEEDED
//         .then(response => response.json())
//         .then(data => console.log(data.response.similarity_list))
//         .catch(err => console.log(err));
// }
// function getAppleJson(song) {
//     fetch("https://itunes.apple.com/search?term=" + song + "&entity=song")
//         .then(response => response.json())
//         .then(data => open(data.results[0].trackViewUrl))
//         .catch(err => console.log(err))
// }

// THIS WAS WORKING BUT WAS JUST LOOKING FOR SONG TITLES THAT MATCHES THE MOOD

// function getSongQuery(query) {
//         fetch("https://itunes.apple.com/search?term=" + query + "&entity=song") //QUERY CAN BE ANYTHING
//             .then(response => response.json())
//             .then(data => {
//                 let randomNum = Math.floor((Math.random() * (data.results.length)) / 2)
//                 open(data.results[randomNum].trackViewUrl)
//             })
//             .catch(err => console.log(err))
// }

// RETURNS A JSON LIST OF PLAYLISTS RELATED TO THE MOOD IF 1 WORD

function getSongQuery(query) {
    fetch("https://api.deezer.com/search/playlist?q=" + query + "+music") //QUERY CAN BE ANYTHING
        .then(response => response.json())
        .then(data => dealWithPromise(data, query))
}

function dealWithPromise(promise, query) {
    try{
        let randomNum = Math.floor((Math.random() * (promise.data.length)) / 2);
        open(promise.data[randomNum].link);
    }
    catch(err){
        console.log(`\n ${query} is not a valid mood 👎 please try again`);
        open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}

// getSongQuery('cheesedreams')

module.exports = {
    getSongQuery, dealWithPromise
}