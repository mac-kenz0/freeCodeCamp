function myReplace(str, before, after) {
  var re = new RegExp(before, 'gi');
  var afterArray = after.split('');
  var beforeArray = before.split('');
  var firstAfterChar = afterArray[0];
  var firstBeforeChar = beforeArray[0];
  var restOfAfterSentance = afterArray.splice(1).join('');
  var restOfBeforeSentance = beforeArray.splice(1).join('');
    if (firstBeforeChar == firstBeforeChar.toUpperCase()) {
      firstAfterChar = firstAfterChar.toUpperCase();
      after = firstAfterChar + restOfAfterSentance;
    }
  return str.replace(re, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

