//This will display the lyrics to the specified song on your local host
//You will have to install node and "npm install genius-lyrics-api"
//to start the server you MUST have node installed
//from there you simply write "nodemon geniusAPI.js" in your CLI
//in my case I used Ubuntu's bash CLI

//then go to your browser and type localhost:3000/uzi to display the lyrics

var express = require('express');
var app = express();
var gen = require('genius-lyrics-api');

app.get('/uzi', function(response, request){
const options = {
	apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',  //need to sign up for genius api client to get token
	title: '20 Min',
	artist: 'Lil Uzi Vert',
	optimizeQuery: true
};

gen.getLyrics(options).then((lyrics) => request.write(lyrics));

// gen.getSong(options).then((song) =>
// 	request.write(`
// 	${song.id}
// 	${song.url}
// 	${song.albumArt}
// 	${song.lyrics}`)
// );

});

app.listen(3000, () => {
    console.log("We are currently running on this port");
});
