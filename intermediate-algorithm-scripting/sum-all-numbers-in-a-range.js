function reduceArray(num1, num2, total){
  
  total = total + num1 + num2;
  if (num1 == num2 || num1 + 1 == num2){
    return total;
  }
  num1++; num2--;
  return reduceArray(num1, num2, total);
  
}
function sumAll(arr) {
  arr = arr.sort(function(a, b){
    return a - b;
  });
 var total = 0;
 return reduceArray(arr[0], arr[1], total);          
}

sumAll([1, 4]);
