# data-uri-stream

Create a transform stream that will emit a [data
uri](http://en.wikipedia.org/wiki/Data_URI_scheme).

# Usage

```js
var datauri = require("data-uri-stream"),
	concat = require("concat-stream"),
	fs = require("fs");

	fs.readFile("image.png")
		.pipe(datauri({ type: "image/png" }))
		.pipe(concat(function(data) {
			console.log(data) // datauri
		});
```
