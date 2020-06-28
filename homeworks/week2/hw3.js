function reverse(str) {

	var strArr=Array.from(str);
        var answer=''
	for(var i=strArr.length-1; i>=0; i-- ){
	answer+=strArr[i];
	}
	console.log(answer.toString());
}

//test
reverse('hello');
reverse('1abc2');
reverse('1,2,3,2,1')
