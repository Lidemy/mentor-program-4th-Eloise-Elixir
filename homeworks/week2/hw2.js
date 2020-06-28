function capitalize(str) {
     if(str.charCodeAt(0) >=97 && str.charCodeAt(0) <=122)
	{return str.charAt(0).toUpperCase()+str.slice(1);
	}
     else {
 	 return str}
 }


//test
console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
