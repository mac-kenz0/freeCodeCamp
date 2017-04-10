
function largestOfFour(arr) {
  // You can do this!
  var maxArr = arr[0].length;
  var returnArr=[];
  for(i=0;i< arr.length;i++){
    maxArrNum = arr[i][0];
    for(j=0;j<arr[i].length;j++){
      if(maxArrNum < arr[i][j]){
        maxArrNum = arr[i][j];
      }
    }
    
    returnArr.push(maxArrNum);
    console.log(returnArr);
  }
  return returnArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
