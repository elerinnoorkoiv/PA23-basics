const readline = require('readline').createInterface({
	input: process.stdin, 
	output: process.stdout,
});

let ounad = 14
readline.question('Mitu poialpoissi tahab ounu? ', poialpoisid => {
	for (let i = 1; i <= poialpoisid; i++) {
		let ounadPoistele = Math.ceil(Math.random() * 2)
		console.log(ounadPoistele)
		ounad = ounad - ounadPoistele
	}
	console.log('Lumivalgekesele jai' + " " + ounad);
	readline.close();
})