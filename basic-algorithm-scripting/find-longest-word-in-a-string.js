function findLongestWord(str) {
  var array = str.split(' ');
  
  var sortedArray = array.reduce(function(acc,val){    
    var longer = acc.length > val.length ? acc :val ;
    return longer;
  });
  return sortedArray.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

