const talkServices = require('./common/talk.service');

let talkServiceClass = new talkServices.TalkService();

alert('Conférence App démarré !!');
talkServiceClass.findAllSpeakers().then(function(speakers) {
	for (let [key, value] of speakers.entries()) {
		console.log(speakers[key].firstname);
	}
});
