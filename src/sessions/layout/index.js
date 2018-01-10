const contentTemplate = require("./session.html");
const talkServices = require('../../common/talk.service');

class Session {
	constructor() {
		// TODO Map of 2 trips
	}

	render(idView,idSession) {
		let data = {};
		let classTalkService = new talkServices.TalkService();
		classTalkService.findSessionById(idSession).then(function(session) {
			data = {
				"titre": session.title,
				"description": session.desc?session.desc:"Aucune description disponible",
				"speakers": []
			}
			for(let index in session.speakers) {
				classTalkService.findSpeakerById(session.speakers[index]).then(function(speaker) {
					speaker.image = "../../../ressources/img/"+speaker.image;
					data.speakers.push(speaker);
					let rendered = Mustache.render(contentTemplate,data);
					document.getElementById(idView).innerHTML = rendered;

				})
			}
		});

		
	}
	
}

exports.Session = Session;