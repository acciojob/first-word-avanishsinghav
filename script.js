function firstWord(s) {
  // your code here
	let temp = s.trim();
	let str = "";
	for(let i = 0; i<temp.length; i++){
		if(temp[i] === " "){
			return str;
		}
		else{
			str += temp[i];
		}
	}
	return str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
