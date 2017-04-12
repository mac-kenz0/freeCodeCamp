
    function smallestCommons(a) {
     a.sort(function(a,b){
       return b-a;
     });
     var newA = [];
    for (var i =a[0] ; i >= a[1] ; i--){
       newA.push(i);
    }
    // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;
 do {
   quot = newA[0] * loop * newA[1];
for(n = 2; n < newA.length; n++){
  if (quot % newA[n] !== 0){
    break;
  }
}
   loop++;
   
    } while (n !== newA.length);
return quot;
    }
    smallestCommons([1, 5]);
	//getAllFactorsFor(4);