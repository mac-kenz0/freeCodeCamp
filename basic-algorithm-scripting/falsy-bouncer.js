
function bouncer(arr) {
  var a = [];
  for (var i =0; i < arr.length; i++){
    if (arr[i] !=="" && arr[i] !== null && arr[i] !== undefined && arr[i] ){
          a.push(arr[i]);
        }
  }
  return a;
}

bouncer([7, "ate", "", false, 9]);



