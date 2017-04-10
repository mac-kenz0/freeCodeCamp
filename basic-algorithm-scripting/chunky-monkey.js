
function chunkArrayInGroups(arr, size) {
  var returnArray = [];
  var i = 0;
   
  while (i < arr.length){
    returnArray.push(arr.slice(i, i +size));
    i += size;
  }
  return returnArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
