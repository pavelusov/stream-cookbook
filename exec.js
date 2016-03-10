"use strict"

const exec = require('child_process').exec;

let usage = `

	exec a process and stream
	the results to standard out
		
	usage:
	>	node exec.js pwd
	>	node exec.js ls
	>	node exec.js cat *.js
	>	node exec.js ls > ./test.txt
`;

let first_arg = "";
let args = [];

if( process.argv.length < 3 ) {

	console.log( usage );

} else {

	let _args = process.argv;
	let args  = [];
	args = _args.slice(2);
	let command = args.join(' ');

	let child = exec(command);
	child.stdout.pipe(process.stdout, { end: false });

	child.on('exit', () => {
		console.log("-- finished --");
	});

	child.on('error', (err) => {
		console.log(err);
	});
}
