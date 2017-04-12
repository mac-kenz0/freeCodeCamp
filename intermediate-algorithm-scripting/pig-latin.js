
function translatePigLatin(str) {
  var firstChar = str[0];
  var secondChar = str[1];
    if( firstChar == 'A' || firstChar == 'a' || firstChar == 'E' || firstChar == 'e' || firstChar == 'O' || firstChar == 'o' || firstChar == 'U' || firstChar == 'u' || firstChar == 'I' || firstChar == 'i'){
  return str + "way";
  }
  if (firstChar == 'g' || firstChar == 'G'|| secondChar == 'l' || secondChar == 'L'){
    	return str.split('').splice(2).join('') + firstChar + secondChar + "ay";
  }
  str = str.split('').splice(1).join('') + firstChar + "ay";
  return str;
}

translatePigLatin("glove");
