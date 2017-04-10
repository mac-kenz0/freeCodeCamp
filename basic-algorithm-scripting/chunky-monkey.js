
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var returnArray = [];
  var i = 0;
  
  // you need something to go over the entire loop, either for loop or while loop...
  // also you need a conditional that says something to the effect
  // if the size of the array you need is available take it
  // if you the size you need, the array length does not have, take what you can an put the 
  // remainder of array as array.
  
  
  while (i < arr.length){
    returnArray.push(arr.slice(i, i +size));
    
    i += size;
  }
  return returnArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
