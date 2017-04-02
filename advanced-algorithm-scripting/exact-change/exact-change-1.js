function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;

  var result = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN",  0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
    // Here is your change, ma'am.
  var calcCash = [
    ["PENNY", 0.01, 0, 0],
    ["NICKEL", 0.05, 0, 0],
    ["DIME", 0.10, 0, 0],
    ["QUARTER", 0.25, 0, 0],
    ["ONE", 1.00, 0, 0],
    ["FIVE", 5.00, 0, 0],
    ["TEN", 10.00, 0, 0],
    ["TWENTY", 20.00, 0, 0],
    ["ONE HUNDRED", 100.00, 0, 0]
  ];


  for (var i = 8; i >= 0; i--) {
    calcCash[i][3] = cid[i][1];
    calcCash[i][2] = calcCash[i][3] / calcCash[i][1];
  }

 
  for (var j = 8; j >= 0; j--) {
    while (changeDue >= calcCash[j][1] && calcCash[j][2] > 0) {
      calcCash[j][2] --;
      calcCash[j][3] = Number(calcCash[j][3]).toFixed(2) - Number(calcCash[j][1]).toFixed(2) ;
      result[j][1] +=calcCash[j][1] ;
      changeDue = Number(changeDue).toFixed(2) - Number(calcCash[j][1]).toFixed(2);
    }
  }
 
  var a= [];
  for (i = 8; i >=  0 ; i--){
    if (result[i][1] !== 0){
    	a.push([result[i][0], result[i][1],]) ;
    }
  }
  if (changeDue > 0){
  	return "Insufficient Funds";
  }
  var changeLeft = 0;
  for (j = 8; j >= 0; j--) {
     changeLeft += calcCash[j][3];
  }
  
  if (changeLeft === 0){
    return "Closed";
  }
  
	return a;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);