const readline = require('readline').createInterface({
	input: process.stdin, 
	output: process.stdout,
});

readline.question('Sisestage taringute arv: ', taringud => {
	for (let i = 1; i <= taringud; i++) {
		console.log(Math.ceil(Math.random() * 6))
	}
	readline.close()
})