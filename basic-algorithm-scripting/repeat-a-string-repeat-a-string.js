
function repeatStringNumTimes(str, num) {
  // repeat after me
  var returnArray = [];
  for(var i =0; i < num; i++){
   returnArray.push(str);
  }

  return returnArray.join('');
  

}

repeatStringNumTimes("abc", 3);
