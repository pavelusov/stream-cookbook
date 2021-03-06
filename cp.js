"use strict"

const fs = require('fs');

const usage = `

	copy.js (linux cp command clone)
	copy any important cat related documents
	usage:
	>	node cp.js ./cats.txt ./cats_copied.txt

`;

if( process.argv.length < 3 ) {

	console.log( usage );

} else {

	fs.createReadStream( process.argv[2] )
	.on('error', (err) => {
		console.log(err);
	})
	.pipe( fs.createWriteStream( process.argv[3] ) )
	.on('error', (err) => {
		console.log(err);
	});

}
