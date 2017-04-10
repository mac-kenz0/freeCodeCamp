
function titleCase(str) {
  var array = str.toLowerCase().split(' ');
  for(i=0;i< array.length;i++){
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  array =array.join(' ');
  console.log(array);
  return array;
}

titleCase("I'm a little tea pot");
