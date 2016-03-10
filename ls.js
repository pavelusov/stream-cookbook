"use strict"

const fs = require('fs');
const Readable = require('stream').Readable;

`
	ls.js

	list the contents of the
	current working directory.

`
fs.readdir( process.cwd(), (err, items) => {

	if(err) throw err;
	
	// github.com/substack/stream-hanbook
	// Creating a readable stream
	let ls = new Readable();

	for(let i = 0; i < items.length; i++) {
		ls.push(items[i]+'\n');
	}

	ls.push(null);

	ls.pipe(process.stdout);
});
