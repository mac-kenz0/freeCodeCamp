function isPrime(n){
  if(n==1 || n < 1) {return false;}
  else if(n==2) {return true;}
  else {
    for (var j = 2; j < n; j++){
      if (n % j === 0){
        return false;
      }
    }
    return true;
  }
}
function sumPrimes(num) {
  var total = 0;
  for (i = 1; i <=  num ; i++){
    total += isPrime(i) ? i : 0;
  }
  console.log(total);
  return total;
}

sumPrimes(10);
