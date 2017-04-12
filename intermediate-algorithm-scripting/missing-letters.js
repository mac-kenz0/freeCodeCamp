
function fearNotLetter(str) {
  var min = str.charCodeAt();
  var val;
  for(i=0; i< str.length; i++){
    		if(str[i] != String.fromCharCode(min)){
        console.log(str[i] + " : " + String.fromCharCode(min));
        return  String.fromCharCode(min);
        }
        min++;
  }
  return undefined;
}

fearNotLetter("abce");