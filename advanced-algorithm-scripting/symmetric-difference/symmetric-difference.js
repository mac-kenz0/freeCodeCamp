function sym(args) {
 var a = Array.prototype.slice.call(arguments);
 
 function aDiff(a1, a2) {
        var result = [];

        a1.forEach(function(item) {
            if (a2.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        a2.forEach(function(item) {
            if (a1.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });
       
        return result;
    }
    
  return a.reduce(aDiff);
  
}

sym([1, 2, 3], [5, 2, 1, 4]);
