"use strict"

const spawn = require('child_process').spawn;

let usage = `

	Spawn a process and stream
	the results to standard out
		
	usage:
	>	node spawn.js pwd
	>	node spawn.js ls
	>	node spawn.js cat *.js
	>	node spawn.js ls > ./test.txt
`;

let first_arg = "";
let args = [];

if( process.argv.length < 3 ) {

	console.log( usage );

} else {

	let command = process.argv[2];
	let _args = process.argv;
	let args  = [];

	if( process.argv.length > 3 ) {
		args = _args.slice(2);
	} else {
		args = [];
	}

	let spawned_process = spawn(command, [...args] );
	spawned_process.stdout.pipe(process.stdout, { end: false });

	spawned_process.on('exit', () => {
		console.log("-- finished --");
	});

	spawned_process.on('error', (err) => {
		console.log(err);
	});
}
