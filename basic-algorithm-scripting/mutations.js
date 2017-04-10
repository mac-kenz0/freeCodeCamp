/* TODO: There's probably different ways to implement this... Unicode, perhaps ? */

function mutation(arr) {
  var a1 = arr[0].toLowerCase();
  var a2 = arr[1].toLowerCase();

  for (var i = 0; i < a2.length; i++){
    if (a1.indexOf(a2[i]) == -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
