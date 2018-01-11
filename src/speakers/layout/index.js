const contentTemplate = require("./speaker.html");
const talkServices = require('../../common/talk.service');

class Speaker {
	constructor() {
		// TODO Map of 2 trips
	}

	render(idView,idSpeaker) {
		let data = {};
		let classTalkService = new talkServices.TalkService();
		classTalkService.findSpeakerById(idSpeaker).then(function(speaker) {
			speaker.image = "../../../ressources/img/"+speaker.image;
			speaker.lastname = speaker.lastname.toUpperCase();
			speaker.firstname = speaker.firstname.toUpperCase();
			speaker.session = [];

			classTalkService.findSessionsByIdSpeaker(idSpeaker).then(function(sessions) {
				for(let index in sessions) {
					speaker.session.push(sessions[index]);
				}
				let rendered = Mustache.render(contentTemplate,speaker);
				document.getElementById(idView).innerHTML = rendered;
			});
		});

		
	}
	
}

exports.Speaker = Speaker;