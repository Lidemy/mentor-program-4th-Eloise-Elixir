function join(arr, concatStr) {
	var answer = ''
		for( var i=0; i<=arr.length-1; i++ ) {
			if( i == arr.length-1 ) {
				answer = answer+arr[i]
				}
			else {
				answer = answer+arr[i] + concatStr }
	 			}
	return  answer
}



function repeat(str, times) {
	var answer = ''
		for( var i=1; i<=times; i++) {
			answer = answer + str
		}
  return answer
}


console.log(join(['a'], '!'));
console.log(repeat('a', 5));
