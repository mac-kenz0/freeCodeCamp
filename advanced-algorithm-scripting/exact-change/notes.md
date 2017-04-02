This algorithm could be better.
Basically I made a 2D array, with 4 columns and 9 rows.

    ["PENNY", 0.01, 0, 0],
    ["NICKEL", 0.05, 0, 0],
    ["DIME", 0.10, 0, 0],
    ["QUARTER", 0.25, 0, 0],
    ["ONE", 1.00, 0, 0],
    ["FIVE", 5.00, 0, 0],
    ["TEN", 10.00, 0, 0],
    ["TWENTY", 20.00, 0, 0],
    ["ONE HUNDRED", 100.00, 0, 0]

And manipulated array, based on the info provided.

There might have been a way to use the original data structure without converting it into the 2D array, with 4 columns and 9 rows.

Also, I think that there should have been a way to register if there was insufficent funds and closed at the beginning of the structure.

Weird Question came up though....
	Whenever I did something along the lines of a[1] = a[2] - a[3]; I got really weird results. This is weird behavior and you should understand it.