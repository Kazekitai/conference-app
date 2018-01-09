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
					reject('No speakers found');
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
}

exports.TalkService = TalkService;