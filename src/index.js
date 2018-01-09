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

let talkServiceClass = new talkServices.TalkService();

alert('Conférence App démarré !!');
talkServiceClass.findAllSpeakers().then(function(speakers) {
	for (let [key, value] of speakers.entries()) {
		console.log(speakers[key].firstname);
	}
});

let layoutPage = new layout.Layout();
let speakerListContent = new speakerList.SpeakerList();
let sessionListContent = new sessionList.SessionList();
layoutPage.render();


// Routeur
var router = () => {
	if (location.hash == '#speakers-list') {
		speakerListContent.render("main-view");
	} else if (location.hash == '#sessions-list') {
		sessionListContent.render("main-view");
	} else {
		// TODO afficher vue par défaut
	}
}

window.addEventListener('load', () => {
	window.onhashchange = () => {
		router();
	};
	router();
});