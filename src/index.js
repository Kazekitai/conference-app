global.Mustache = require('Mustache');
global.$ = require('jquery');
global.jQuery = require('jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../ressources/css/style.css');
const talkServices = require('./common/talk.service');
const layout = require('./layout/index');

let talkServiceClass = new talkServices.TalkService();

alert('Conférence App démarré !!');
talkServiceClass.findAllSpeakers().then(function(speakers) {
	for (let [key, value] of speakers.entries()) {
		console.log(speakers[key].firstname);
	}
});

let layoutPage = new layout.Layout();
layoutPage.render();