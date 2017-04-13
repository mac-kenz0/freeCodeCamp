
function steamrollArray(arr) {
  // I'm a steamroller, baby
   var newArray = [];
  
  function flatten(a){
    if(!Array.isArray(a)) {
      newArray.push(a);
    } else{
      for (var i in a){
        flatten(a[i]);
      }
    }
  }
  arr.forEach(flatten);
  return newArray;
};

steamrollArray([1, [2], [3, [[4]]]]);




steamrollArray([1, [2], [3, [[4]]]]);
