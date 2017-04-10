
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    var compareEndOfString = str.substring(str.length - target.length);
  if(compareEndOfString == target){
    return true;
  }
  
  
  return false;
}

confirmEnding("Bastian", "n");
