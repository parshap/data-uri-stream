var test = require("tape"),
	datauri = require("./"),
	concat = require("concat-stream");

test("data uri", function(t) {
	var stream = datauri({
		type: "text/plain",
		encoding: "utf-8",
	});
	stream.pipe(concat(function(data) {
		t.equal(data, "data:text/plain;charset=utf-8;base64,VEVTVA==");
		t.end();
	}));
	stream.write("TEST");
	stream.end();
});
