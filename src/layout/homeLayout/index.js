const contentTemplate = require("./home.html");

class Home {
	constructor() {
		// TODO Map of 2 trips
	}

	render(idView) {
		let rendered = Mustache.render(contentTemplate);
		console.log(rendered);
		document.getElementById(idView).innerHTML = rendered;
	}
	
}

exports.Home = Home;