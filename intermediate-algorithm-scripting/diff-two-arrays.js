
function diffArray(arr1, arr2) {
  var newArr1 = [], newArr2 = [];
  // Same, same; but different.
  arr2.filter(function(element, index){
    if (arr1.indexOf(element) == -1){
      newArr1.push(element);
    }
  }, arr2);
  
    arr1.filter(function(element, index){
    if (arr2.indexOf(element) == -1){
      newArr2.push(element);
    }
  }, arr1);

  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
