class TalkService {
	constructor() {
		// TODO Map of 2 trips
	}

	findAllSpeakers() {
		// TODO return promise
		let speakers;
		const req = new XMLHttpRequest();
		req.open('GET', 'http://localhost:3000/speakers', true);
		req.onreadystatechange = (aEvt) => {
			if (req.readyState == 4) {
				if(req.status == 200) {
					speakers = JSON.parse(req.responseText);
				} else {
					throw "Erreur pendant le chargement de la page";
				}
			}
		};
		req.send(null);
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
          		if(speakers) {
					resolve(speakers);
				} else {
					reject('No speaker found');
				}
        	},1000);
		});
	}

	findSpeakerById(id) {
		// TODO return promise
		let speaker;
		const req = new XMLHttpRequest();
		req.open('GET', 'http://localhost:3000/speakers/'+id, true);
		req.onreadystatechange = (aEvt) => {
			if (req.readyState == 4) {
				if(req.status == 200) {
					speaker = JSON.parse(req.responseText);
				} else {
					throw "Erreur pendant le chargement de la page";
				}
			}
		};
		req.send(null);
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
          		if(speaker) {
					resolve(speaker);
				} else {
					reject('No speaker found');
				}
        	},1000);
		});
	}

	findAllSessions() {
		// TODO return promise
		let sessions;
		const req = new XMLHttpRequest();
		req.open('GET', 'http://localhost:3000/sessions', true);
		req.onreadystatechange = (aEvt) => {
			if (req.readyState == 4) {
				if(req.status == 200) {
					sessions = JSON.parse(req.responseText);
				} else {
					throw "Erreur pendant le chargement de la page";
				}
			}
		};
		req.send(null);
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
          		if(sessions) {
					resolve(sessions);
				} else {
					reject('No sessions found');
				}
        	},1000);
		});
	}

	findSessionById(id) {
		// TODO return promise
		let session;
		const req = new XMLHttpRequest();
		req.open('GET', 'http://localhost:3000/sessions/'+id, true);
		req.onreadystatechange = (aEvt) => {
			if (req.readyState == 4) {
				if(req.status == 200) {
					session = JSON.parse(req.responseText);
				} else {
					throw "Erreur pendant le chargement de la page";
				}
			}
		};
		req.send(null);
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
          		if(session) {
					resolve(session);
				} else {
					reject('No sessions found');
				}
        	},1000);
		});
	}
}

exports.TalkService = TalkService;