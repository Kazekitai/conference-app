global.Mustache = require('Mustache');
global.$ = require('jquery');
global.jQuery = require('jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../ressources/css/style.css');
const talkServices = require('./common/talk.service');
const speakerList = require('./speakers/list/index');
const sessionList = require('./sessions/list/index');
const layout = require('./layout/index');
const home = require('./layout/homeLayout/index');
const session = require('./sessions/layout/index');

let talkServiceClass = new talkServices.TalkService();

talkServiceClass.findAllSpeakers().then(function(speakers) {
	for (let [key, value] of speakers.entries()) {
		console.log(speakers[key].firstname);
	}
});

let layoutPage = new layout.Layout();
let speakerListContent = new speakerList.SpeakerList();
let sessionListContent = new sessionList.SessionList();
let homeContent = new home.Home();
let sessionContent = new session.Session();
layoutPage.render();


// Routeur
var router = () => {
	console.log(location.hash);
	let hashFullUrl = location.hash.split("?");
	let hashUrl = hashFullUrl[0];
	let id = hashFullUrl[1];
	console.log("hashUrl", hashUrl);
	console.log("id", id);

	if (hashUrl == '#speakers-list') {
		document.getElementById("content-title").innerHTML = "Présentateurs";
		speakerListContent.render("main-view");
	} else if (hashUrl == '#sessions-list') {
		document.getElementById("content-title").innerHTML = "Sessions";
		sessionListContent.render("main-view");
	} else if(hashUrl == '#session') {
		document.getElementById("content-title").innerHTML = "Session";
		sessionContent.render("main-view",id);
	} else if(hashUrl == '#speaker') {
		document.getElementById("content-title").innerHTML = "Présentateur";
		sessionContent.render("main-view",id);
	}
	else {
		document.getElementById("content-title").innerHTML = "Conférence";
		homeContent.render("main-view");
	}
}

window.addEventListener('load', () => {
	window.onhashchange = () => {
		router();
	};
	router();
});