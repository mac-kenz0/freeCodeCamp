var user = null;
var computer = null;
var userStartGame = false;
var a = [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""]
];

function display(a) {
    $('#one-one').html("<p class='display-text'>" + a[0] + "</p>");
    $('#one-two').html("<p class='display-text'>" + a[1] + "</p>");
    $('#one-three').html("<p class='display-text'>" + a[2] + "</p>");
    $('#two-one').html("<p class='display-text'>" + a[3] + "</p>");
    $('#two-two').html("<p class='display-text'>" + a[4] + "</p>");
    $('#two-three').html("<p class='display-text'>" + a[5] + "</p>");
    $('#three-one').html("<p class='display-text'>" + a[6] + "</p>");
    $('#three-two').html("<p class='display-text'>" + a[7] + "</p>");
    $('#three-three').html("<p class='display-text'>" + a[8] + "</p>");

}

function computerInput(a) {
    var filledComputerInput = false;
    var count =0;
    for (i = 0; i <a.length; i++){
    	if ( a[i] == ""){
    		count++;
    	}
    }
   
   if(count > 0) {
   while (!filledComputerInput ) {
        var aElement = Math.floor((Math.random() * 10));
        if (a[aElement] == "") {
            a[aElement] = computer;
            filledComputerInput = true;
        }
    }  
   }
   else{
   	alert ("tie");
   	return reset();
   }
}

function checkWinner(a) {
	// check row 1
	if (a[0] == a[1] && a[1] == a[2]){
		alert (a[0] + "wins !");
		return reset();
	}
	// check row 2
	if (a[3] == a[4] && a[4] == a[5]){
		alert (a[3] + "wins !");
		return reset();	
	}
	// check row 3
	if (a[6] == a[7] && a[7] == a[8]){
		alert (a[6] + "wins !");
		return reset();	
	}

	// check column 1
	if (a[0] == a[3] && a[3] == a[6]){
		alert (a[0] + "wins !");
		return reset();;
	}
	// check column 2
	if (a[1] == a[4] && a[4] == a[7]){
		alert (a[1] + "wins !");
		return reset();
	}
	// check column 3
	if (a[2] == a[5] && a[5] == a[8]){
		alert (a[2] + "wins !");
		return reset();	
	}

	// check diagonal 1
	if (a[0] == a[4] && a[4] == a[8]){
		alert (a[0] + "wins !");
		return reset();
	}
	// check diagonal 2
	if (a[2] == a[4] && a[4] == a[6]){
		alert (a[2] + "wins !");
		return reset();	
	}


}

function reset (){
	location.reload();
}
$(document).ready(function($) {


    $("#user-choose-x").on('click', function() {
        user = "X";
        computer = "O";
        $("#user-choose-o").css("background-color", "#fff");
        $("#user-choose-x").css("background-color", "#eae8e8");
        $(".user-confirmation").html("You've chosen to be " + user + ". The computer will be " + computer + " .");
        $('#start').css("display", "block");
        // enable tic tac toe board
    });
    $("#user-choose-o").on('click', function() {
        user = "O";
        computer = "X";
        $("#user-choose-o").css("background-color", "#eae8e8");
        $("#user-choose-x").css("background-color", "#fff");
        $(".user-confirmation").html("You've chosen to be " + user + ". The computer will be " + computer + ".");
        $('#start').css("display", "block");
        // enable tic tac toe board
    });

    $('#start').on('click', function() {
        userStartGame = true;
        $(".user-prompt").css("display", "none");
        $(".play-text").css("display", "block");
        $(".play-text").html("You're user " + user + ". Play on!");
        $(".tic-tac-toe").css("display", "block");
    });


    $('#one-one').on('click', function() {
        if (userStartGame) {
            if (a[0] == "") {
                a[0] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    });
    $('#one-two').on('click', function() {
        if (userStartGame) {
            if (a[1] == "") {
                a[1] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    });
     $('#one-three').on('click', function() {
        if (userStartGame) {
            if (a[2] == "") {
                a[2] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    });   

/* second row */
    $('#two-one').on('click', function() {
        if (userStartGame) {
            if (a[3] == "") {
                a[3] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    });
    $('#two-two').on('click', function() {
        if (userStartGame) {
            if (a[4] == "") {
                a[4] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    });
     $('#two-three').on('click', function() {
        if (userStartGame) {
            if (a[5] == "") {
                a[5] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    }); 
/* third row */
    $('#three-one').on('click', function() {
        if (userStartGame) {
            if (a[6] == "") {
                a[6] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    });
    $('#three-two').on('click', function() {
        if (userStartGame) {
            if (a[7] == "") {
                a[7] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    });
     $('#three-three').on('click', function() {
        if (userStartGame) {
            if (a[8] == "") {
                a[8] = user;
                display(a);
                checkWinner(a);
                computerInput(a);
                display(a);
                checkWinner(a);
                // for (var i = 0; i < a.length; i++) {
                //     console.log(i + " | " + a[i]);
                // }
            }
        } else {
            alert("already selected");
        }
    }); 



});

/*

	Create click events for each tic tac toe box
*/





// function checkWinner(a) {
//     // for (var i = 0; i < a.length; i ++){
//     // 	console.log(i + " | " + a[i][0] + " | " + a[i][1]);
//     // }
//     /* check to see if first row is true*/
//     for (var i = 0; i < a.length; i++) {
//         console.log(i + " | " + a[i][0] + " | " + a[i][1]);
//     }
//     console.log("\n");
//     if (a[0][1] && a[1][1] && a[2][1]) {
//         if (a[0][0] == a[1][0] && a[1][0] == a[2][0]) {
//             alert(a[0][0] + " wins !");
//             return true;
//         }
//     }
//     /* check to see if second row is true*/
//     if (a[3][1] && a[4][1] && a[5][1]) {
//         if (a[3][0] == a[4][0] && a[4][0] == a[5][0]) {
//             alert(a[3][0] + " wins !");
//             return true;
//         }
//     }
//     /* check to see if third row is true*/
//     if (a[6][1] && a[7][1] && a[8][1]) {
//         if (a[6][0] == a[7][0] && a[7][0] == a[8][0]) {
//             alert(a[6][0] + " wins !");
//             return true;
//         }
//     }
//      check to see if first column is true
//     if (a[0][1] && a[3][1] && a[6][1]) {
//         if (a[0][0] == a[3][0] && a[3][0] == a[6][0]) {
//             alert(a[0][0] + " wins !");
//             return true;
//         }
//     }
//     if (a[1][1] && a[4][1] && a[7][1]) {
//         if (a[1][0] == a[4][0] && a[4][0] == a[7][0]) {
//             alert(a[1][0] + " wins !");
//             return true;
//         }
//     }
//     if (a[2][1] && a[5][1] && a[8][1]) {
//         if (a[2][0] == a[5][0] && a[5][0] == a[8][0]) {
//             alert(a[2][0] + " wins !");
//             return true;
//         }
//     }
//     /* diagonals*/
//     if (a[0][1] && a[4][1] && a[8][1]) {
//         if (a[0][0] == a[4][0] && a[4][0] == a[8][0]) {
//             alert(a[0][0] + " wins !");
//             return true;
//         }
//     }
//     if (a[2][1] && a[4][1] && a[6][1]) {
//         if (a[2][0] == a[4][0] && a[4][0] == a[2][0]) {
//             alert(a[2][0] + " wins !");
//             return true;
//         }

//     }

// }

// function computerInput(a) {
//     //Math.floor((Math.random() * 10));
//     var filledComputerInput = false;

//     while (!filledComputerInput) {
//         var aElement = Math.floor((Math.random() * 10));
//         console.log(aElement);
//         if (a[aElement][1] == false) {
//             a[aElement][0] = [computer]
//             a[aElement][1] = true;

//             filledComputerInput = true;
//         }
//         if (aElement == 0) {
//             $('#one-one').html(computer);
//         }
//         if (aElement == 1) {
//             $('#one-two').html(computer);
//         }
//         if (aElement == 2) {
//             $('#one-three').html(computer);
//         }
//         if (aElement == 3) {
//             $('#two-one').html(computer);
//         }
//         if (aElement == 4) {
//             $('#two-two').html(computer);
//         }
//         if (aElement == 5) {
//             $('#two-three').html(computer);
//         }
//         if (aElement == 6) {
//             $('#three-one').html(computer);
//         }
//         if (aElement == 7) {
//             $('#three-two').html(computer);
//         }
//         if (aElement == 8) {
//             $('#three-three').html(computer);
//         }
//     }

// }

// function computerInput(a) {
//     var filledComputerInput = false;
//     while (!filledComputerInput) {
//         var aElement = Math.floor((Math.random() * 10));
//         if (a[aElement] === null) {
//             a[aElement] = computer;
//             filledComputerInput = true;
//         }
//     }

//     //     while (!filledComputerInput) {
//     //         var aElement = Math.floor((Math.random() * 10));
//     //         console.log(aElement);
//     //         if (a[aElement][1] == false) {
//     //             a[aElement][0] = [computer]
//     //             a[aElement][1] = true;

//     //             filledComputerInput = true;
//     //         }
// }

//else {
//     alert("choose input, click start box")
// }