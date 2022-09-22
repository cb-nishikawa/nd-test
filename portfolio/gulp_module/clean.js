const $ = require('./modules.js');
const option = require('./option.js');

function clean() {
	return $.del([ option.url.dist ]);
}


module.exports = {
	clean: clean,
}
