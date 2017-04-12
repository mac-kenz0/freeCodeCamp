function uniteUnique(arr1, arr2, arr3) {
	  var returnArr = [];
    for(i=0; i<arguments.length;i++){
  	//console.log(arguments[i]);
    for(j=0;j<arguments[i].length;j++){      
      if(returnArr.indexOf(arguments[i][j]) < 0){
      	returnArr.push(arguments[i][j]);
      }
    }
    }
  return returnArr;
   // console.log(returnArr);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);