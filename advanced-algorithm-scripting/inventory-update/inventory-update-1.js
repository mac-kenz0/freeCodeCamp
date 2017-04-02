
function updateInventory(arr1, arr2) {
    for (var i =0; i <arr1.length; i++){
    	console.log(arr1[i][0] + " | " + arr1[i][1]);
    }
    console.log("\n");
   for (var i =0; i <arr2.length; i++){
    	console.log(arr2[i][0] + " | " + arr2[i][1]);
    }
	 console.log("\n")
   var yolo = [];
    for (var i = 0; i < arr1.length; i++){
			for (var j = 0; j < arr2.length; j++){
      	if (arr1[i][1] == arr2[j][1]){
          	arr1[i][0] += arr2[j][0];
         		arr2[j][0] = 0;
        }
      }
    }
    console.log("\n")
    
    for(i = 0; i < arr2.length; i++){
    	if (arr2[i][0] == 0 ){
      	arr2.splice(i, 1 );
        i--;
      	//console.log(arr2[i]);
      	//arr2.splice()
      }
    }
    
    
    for (var i =0; i <arr1.length; i++){
    	console.log(arr1[i][0] + " | " + arr1[i][1]);
    }
   for (i =0; i <arr2.length; i++){
    	console.log(arr2[i][0] + " | " + arr2[i][1]);
    }
    //console.log(arr1.concat(arr2));
    arr1 =  arr1.concat(arr2);
    arr1.sort(function(a, b) {
    	console.log( a[1]);
      console.log( b[1]);
      console.log("\n");
      
      if (a[1] < b[1]){
      	return -1;
      } else if (a[1] > b[1]) {
      	return 1;
      } else{
      	return 0;
      }
     // return a[1].value - b[1].value;
    });
  return arr1;
    //fruits.sort();
    // maybe merge two arrays, but  the second instance of a[i][1] is removed
    
    // All inventory must be accounted for or you're fired!
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
