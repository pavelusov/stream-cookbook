"use strict"

const fs = require('fs');

const usage = `

	cat.js (linux cat command clone)
	view any important cat related documents
	usage:
	>	node cat.js ./cats.txt

`;

if( process.argv.length < 2 ) {

	console.log( usage );

} else {

	fs.createReadStream( process.argv[2] )
		.on('error', (err) => {
			console.log(err);	
		})
		.pipe( process.stdout );
}
