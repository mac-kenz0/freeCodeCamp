function checkNum(num){
  if (typeof num != "number"){
    return undefined;
  }
  return num;
}
function addTogether() {
  if(arguments.length == 2) {
    var arg1 = checkNum(arguments[0]);
    var arg2 = checkNum(arguments[1]);
    if(arg1 === undefined || arg2 === undefined){
      return undefined;
    }
    return arguments[0] + arguments[1];
  }
  else{
    var a = checkNum(arguments[0]);
    if (a === undefined){
      return undefined;
    }
    return function(b){
      if (checkNum(b) == undefined){
        return undefined;
      }
      return a + b;
    };
  }
}

addTogether(2,3);
