const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('sisestage mitu korda aratada ', aratus => {
	for (let kord = 0; kord < aratus ; kord++) {
		console.log("Touse ja sara!");
		
	}
	readline.close();
}) 