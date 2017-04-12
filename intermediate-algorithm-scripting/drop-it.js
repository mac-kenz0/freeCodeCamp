function dropElements(arr, func) {
  // Drop them elements.
  for(i = 0; i< arr.length; i++){

    if (func(arr[i]) == false){
  		 arr.shift();
        i--;
    }else {
    	return arr;
    }
    
    }
    console.log(arr);
    return arr;
  }