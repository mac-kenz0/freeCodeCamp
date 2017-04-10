
function palindrome(str) {

  str = str.toLowerCase().replace(/\s|_|,|\.|\-|\\|\/|\:|\(|\)/gi, '');
  console.log(str);
  var palStr = str.split('').reverse().join('');


  if(palStr === str){
      return true;
  }
return false;
}



palindrome("eye");
