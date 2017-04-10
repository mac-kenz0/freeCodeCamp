
function truncateString(str, num) {
  // Clear out that junk in your trunk
  // num says, you only want 14 elements in the return array
  // the eclipse takes up three dots
  var yolo;

  if (str.length == num || str.length < num){
  return str;
  }
  if (str.length > num ){
  	if (num - 3 > 0) {
    	yolo = str.slice(0, num - 3);
    }
   else if ( num - 3 < 0){
   		yolo = str.slice(0, num);
   }
   else{
   	yolo = str;
   }
  }
 
  yolo = yolo + "...";
 
//  var test = "Peter Piper...";
  //cconsole.log(test.length);
  return yolo;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
