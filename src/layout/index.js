const contentTemplate = require("./layout.html");
class Layout {
	constructor() {
	}

	render() {
		let rendered = Mustache.render(contentTemplate);
		console.log(rendered);
		document.body.innerHTML = rendered;
	}
		
}

exports.Layout = Layout;