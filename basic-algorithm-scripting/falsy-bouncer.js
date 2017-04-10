
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // the last thing that I want to check
  // if it's a typeof boolean and it's false, then exit
  // if it's a typeof Number and it's NaN
  var a = [];
  for (var i =0; i < arr.length; i++){
    if (arr[i] !=="" && arr[i] !== null && arr[i] !== undefined && arr[i] ){
          a.push(arr[i]);
        }
    
    
  }
  
  console.log(a);
  return a;
}

bouncer([7, "ate", "", false, 9]);



