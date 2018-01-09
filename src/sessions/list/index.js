const talkServices = require('../../common/talk.service');

class SessionList {
	constructor() {
		// TODO Map of 2 trips
	}

	render(idView) {
		let classTalkService = new talkServices.TalkService();
		classTalkService.findAllSessions().then(function(sessions) {
			let content = '<div class="list-container">';
			content += '<div>';
			for (let [key, value] of sessions.entries()) {
				// console.log(speakers[key].firstname);
				content += '<a href="#"><p>' + sessions[key].title +'</p></a>';
			}
			content += '</div>';
			content += '</div>';
			document.getElementById(idView).innerHTML = content;
		});

		
	}
	
}

exports.SessionList = SessionList;