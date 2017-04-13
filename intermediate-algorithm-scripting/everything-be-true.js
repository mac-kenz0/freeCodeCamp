
function truthCheck(collection, pre) {
  // Is everyone being true?
  
  for(var prop in collection){
    
  	if (!collection[prop].hasOwnProperty(pre) || collection[prop][pre] === null || collection[prop][pre] === undefined || collection[prop][pre] === ""){
      return false;
    }
    if(isNaN(collection[prop][pre]) && typeof collection[prop][pre] == "number"){
       //console.log(collection[prop][pre] + " : typeof:" + typeof collection[prop][pre]);
      return false;
    }
   if(typeof collection[prop][pre] == "number" && collection[prop][pre] == 0){
       //console.log(collection[prop][pre] + " : typeof:" + typeof collection[prop][pre]);
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
