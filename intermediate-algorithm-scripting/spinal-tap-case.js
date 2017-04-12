
function spinalCase(str) {
	//var a = str.replace(/\s/g,"-");
  //console.log(a);
  a = str.split('');
  for(i = 0; i< a.length;i++){
    if(a[i+1] !== undefined && a[i+1] == a[i+1].toUpperCase() && a[i+1] != " " && a[i+1] != "-"&& a[i+1] != "_"){
      a.splice(i+1,0, "-");
      i++;
    }
  }
	for (i =0; i< a.length; i++){
  	if(a[i] == " " && a[i+1]=="-" || a[i]=="_"){
    	//remove a[i]
      a.splice(i, 1);
    }
  }
 
  a = a.join('');
  a = a.replace(/\s/g,"-").toLowerCase();

  console.log(a);
  return a;
}
