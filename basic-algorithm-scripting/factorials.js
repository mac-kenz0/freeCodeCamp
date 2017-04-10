/*
	TODO:
	There have to be different algorithms to handle factorials
*/
function factorialize(num) {
  var sum=1;
  while (num > 1){
    sum *= num;
    num--;
  }
  return sum;
  
}

factorialize(5);