
function findLongestWord(str) {
  var array = str.split(' ');
  
  var sortedArray = array.sort(function(a, b){
    return b.length - a.length;
  });
  
  var longestWord = array.shift();
  return longestWord.length;
  
  
  
  
  
  
  //var maxString = array[0].length;

//   for(i = 0 ; i < array.length; i++){
//     if(array[i].length > maxString){
//       maxString = array[i].length;
//     }
//     //console.log("yas");
//   }
//   return maxString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
