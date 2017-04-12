function sumFibs(num) {
  adder = 0;
  nextAdder = 1;
  sum = 1;
  returnTotal = 0;
  while (sum <= num){
      if(sum % 2 == 1){
    	returnTotal += sum;
    }
		sum = adder + nextAdder;
    adder = nextAdder;
    nextAdder = sum;
    

   console.log(" | " + sum +  " | "  + adder + " | "  + nextAdder + " | " + returnTotal);
  }
  return returnTotal;
}
sumFibs(4);
