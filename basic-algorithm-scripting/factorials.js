
function factorialize(num) {
  var sum=1;
  while (num > 1){
    sum *= num;
    num--;
  }
  return sum;
  
}

factorialize(5);