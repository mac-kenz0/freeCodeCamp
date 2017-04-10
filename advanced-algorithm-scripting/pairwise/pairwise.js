
function pairwise(arr, arg) {
  var count = 0, i , j;
  for (i = 0; i <arr.length; i++){
    for (j = 0; j<arr.length; j++){
      if (i != j  && !isNaN(arr[i]) && !isNaN(arr[j]) && arr[i] + arr[j] == arg ){
        count = count + i + j;
        arr[i] = NaN;
        arr[j] = NaN;
      }
    }
  }
  return count;
}

pairwise([1,4,2,3,0,5], 7);
