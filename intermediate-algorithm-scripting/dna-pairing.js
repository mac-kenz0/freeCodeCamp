
function pairElement(str) {
  var strArray = str.split('');
  var returnArray = new Array();

  for(i=0; i< strArray.length;i++){
    if(strArray[i] == "G"){
      returnArray.push(new Array("G","C"));
    }
    if(strArray[i] == "C") {
      returnArray.push(new Array("C","G"));
    }
    if(strArray[i] == "T") {
       returnArray.push(new Array("T","A"));
    }
    if(strArray[i] == "A") {
       returnArray.push(new Array("A","T"));
    }
  }
  console.log(returnArray);
  return returnArray;
}

pairElement("GCG");
