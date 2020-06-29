function printStars(n) {

	if(n>=1 && n<=30) {
		for(var i=1; i<=n; i++) {
		console.log('*') }
	}
	else {
		console.log('No')
	} 

}


//test
printStars(5);
printStars(8);
printStars(77);
