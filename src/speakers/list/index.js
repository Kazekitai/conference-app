const talkServices = require('../../common/talk.service');

class SpeakerList {
	constructor() {
		// TODO Map of 2 trips
	}

	render(idView) {
		let classTalkService = new talkServices.TalkService();
		classTalkService.findAllSpeakers().then(function(speakers) {
			let content = '<div class="list-container">';
			content += '<div>';
			for (let [key, value] of speakers.entries()) {
				// console.log(speakers[key].firstname);
				content += '<a href="#"><p>' + speakers[key].firstname.toUpperCase() + " " + speakers[key].lastname.toUpperCase()  +'</p></a>';
			}
			content += '</div>';
			content += '</div>';
			document.getElementById(idView).innerHTML = content;
		});

		
	}
	
}

exports.SpeakerList = SpeakerList;