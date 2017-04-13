function whatIsInAName (collection, source){
var srckeys = Object.keys(source);
var a =[];

for (var key in collection){
var passes = true;
for (var i = 0; i < srckeys.length; i++){
	if (!collection[key].hasOwnProperty(srckeys[i]) || collection[key][srckeys[i]] !== source[srckeys[i]]){
  	passes = false;
  }
  if(!passes){
  	break;
  }

}  if (passes){
    a.push(collection[key]);
  }
}
return a;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
