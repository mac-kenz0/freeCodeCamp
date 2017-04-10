
function orbitalPeriod(arr) {
  var temp; 
  function calc(altitude) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
    var yolo = 2 * Math.PI * Math.sqrt( Math.pow((altitude + earthRadius),3)/ GM);
    return Math.round(yolo);
  }

  arr.filter(function(i){
    temp = calc(i.avgAlt);
    delete i.avgAlt;
    i.orbitalPeriod = temp;
  });

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
