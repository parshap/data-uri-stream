var through = require("through");

module.exports = function(options) {
	if ( ! options) options = {};
	var start = "data:",
		first = true;
	if (options.type) start += options.type;
	if (options.encoding) start += ";charset=" + options.encoding;
	start += ";base64,";
	return through(function(data) {
		if (first) {
			this.emit("data", start);
			first = false;
		}
		this.emit("data", new Buffer(data).toString("base64"));
	});
};
