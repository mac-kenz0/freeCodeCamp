//var i, strictMode,
//   a = [];
//var count = 0;

function generateArray() {
    a = [];
    for (i = 0; i < maxRounds; i++) {
        a[i] = Math.floor(Math.random() * 4);
    }

    return a;
}

var strictMode = false;
const maxRounds = 5;
var a = generateArray();
console.log("generated game array");
console.log(a);
console.log('\n');

$('#strict').click(function() {
    if (strictMode) {
        strictMode = false;
        $('#strict-mode').html("Off");
    } else {
        strictMode = true;
        $('#strict-mode').html("On");
    }

});


$('#start').click(function() {

    //document.getElementById('start').removeElementListener('click');
    count = 1;
    displayArray(a, count);
    $(this).off();
});

function resetGame() {
    // document.getElementsByClassName("circle-container").removeEventListener("click", listenUserInput);
    alert("go back to round one");
    count = 1;
    display(a, count);
    // $(".top-left-circle").off("click", function(){
    //     console.log('no toggle effect...');
    // });

    //count = 1;
    // displayArray(a, count);
}

function resetRound(runArray) {
    alert("reset round");
    // console.log(runArray);
    // what to do with runArray....
    displayArray(a, runArray.length);
    //  count = 1;
    // displayArray(a, count);
    // var topLeftCircle = document.getElementById("top-left-circle");
    // topLeftCircle.removeElementListener("click", listenUserInput, true);
    //.removeEventListener("click", listenUserInput);

}

function nextRound(runArray) {
    alert("next Round");

    count = runArray.length + 1;
    displayArray(a, count);
}


function displayArray(a, count) {
    if (count == maxRounds) {
        return alert("you've won!");
    }
    var time = 2000;
    var i = 0;
    var runArray = a.slice(0, count);
    console.log("runArray");
    console.log(runArray);
    console.log('\n');

    var yolosolo = setInterval(function() {
        if (i < runArray.length) {
            toggleButton(runArray[i]);
            i++;
        } else {
            clearInterval(yolosolo);
        }
    }, 2000, runArray, i);


    setTimeout(function() {

        listenUserInput(runArray);
        // document.getElementsByClassName("circle-container").addEventListener("click", function(){
        //     console.log("clicking...");
        // });
        //document.getElementById("circle-container").addEventListener("click", function(){
        // var countUserClick = 0;
        // var r = [];
        // var userClick;
        // console.log("listening...");
        // $(".top-left-circle").click(function() {
        //    toggleButton(0);
        //    setTimeout(function(){
        //     r.push(0);
        //     var runArrayIndexToBeChecked = runArray[r.length-1];
        //     var lastR = r[r.length-1];

        //     if ( runArrayIndexToBeChecked != lastR){
        //         alert("no go");
        //         resetGame();
        //         //remove listeners, restart game.
        //     }

        //    }, 2000);

        //     // setTimeout( toggleButton, 2000, 0);
        //    // console.log("end toggle Button call");

        //     // check(runArray, r);
        //     //check(runArray, countUserClick, 0);
        //     // check(runArray, r);
        // });
        // $(".top-right-circle").click(function() {
        //     toggleButton(1);
        //     r.push(1);
        //     // check(runArray, r);
        //     // check(runArray, countUserClick, 1);
        // });
        // $(".bottom-left-circle").click(function() {
        //     toggleButton(2);
        //     r.push(2);
        //     check(runArray, r);
        //     // check(runArray, countUserClick, 2);

        //     // check(runArray, r);
        // });
        // $(".bottom-right-circle").click(function() {

        //    //  setTimeout(function {
        //    //      toggleButton(3);
        //    //      console.log("s");
        //    //  }, 2000);
        //    //  toggleButton(3);
        //    // r.push(3);
        //     // check(runArray, r);
        //     // check(runArray, countUserClick, 3);

        //     //   check(runArray, r);
        // });
    }, 2000 * count, runArray);

    //}, 2000 * count);


}


// setInterval(function() {
// Do something every 5 seconds
//}, 5000);
//$.each(runArray, function(i, value) {
//     setTimeout(function() {
//         console.log(value);
//         toggleButton(value);

//         console.log("\n");
//     }, time)
//     time += 2000;
// });

// setTimeout(function() {
//     listenUserInput(runArray);
// }, time);


function toggleButton(i) {
    var p;
    var audio;

    if (i == 0) {
        p = $(".top-left-circle");
        audio = new Audio('../music/simonSound1.mp3');
    }
    if (i == 1) {
        p = $(".top-right-circle");
        audio = new Audio('../music/simonSound2.mp3');
    }
    if (i == 2) {
        p = $(".bottom-left-circle");
        audio = new Audio('../music/simonSound3.mp3');
    }
    if (i == 3) {
        p = $(".bottom-right-circle");
        audio = new Audio('../music/simonSound4.mp3');
    }

    audio.play();
    p.fadeOut('slow', function() {
        p.css("opacity", ".75");
    });

    p.fadeIn('slow', function() {
        p.css("opacity", "1");
    });
}

function listenUserInput(runArray) {
    console.log("listening...");
    console.log(runArray); // you need to check the user presses

    var countUserClick = 0;
    var r = [];
    var userClick; // tbd

    $(".top-left-circle").click(function() {
        toggleButton(0);


        setTimeout(function() {
            r.push(0);
            check(runArray, r);
        }, 2000);
        // if (!result){


        //     if (strictMode){
        //         resetGame();
        //     } else{
        //         resetRound();
        //     }
        // }
        //check(runArray, countUserClick, 0);
        // check(runArray, r);
    });
    $(".top-right-circle").click(function() {
        toggleButton(1);

        setTimeout(function() {
            r.push(1);
            check(runArray, r);
        }, 2000);

        // check(runArray, countUserClick, 1);
    });
    $(".bottom-left-circle").click(function() {
        toggleButton(2);
        setTimeout(function() {
            r.push(2);
            check(runArray, r);
        }, 2000);
        // check(runArray, countUserClick, 2);

        // check(runArray, r);
    });
    $(".bottom-right-circle").click(function() {
        toggleButton(3);
        setTimeout(function() {
            r.push(3);
            check(runArray, r);
        }, 2000);
        // check(runArray, countUserClick, 3);

        //   check(runArray, r);
    });
}

function check(runArray, r) {
    console.log("rlength: " + r.length);
    console.log(runArray);
    console.log(runArray[r.length - 1]);
    console.log(r[r.length - 1]);
    var checkRunArray = runArray[r.length - 1];
    var checkUserClick = r[r.length - 1]
    if (checkRunArray != checkUserClick) {
        $(".top-left-circle").off("click");
        $(".top-right-circle").off("click");
        $(".bottom-left-circle").off("click");
        $(".bottom-right-circle").off("click");
        if (strictMode) {
            resetGame();
            //   $(".top-left-circle").off("click", listenUserInput);
            // $(".top-right-circle").off("click", listenUserInput);
            // $(".bottom-left-circle").off("click", listenUserInput);
            // $(".bottom-right-circle").off("click", listenUserInput);
            //  return resetToRoundOne();
        } else {
            resetRound(runArray);
            //document.getElementById("circle-container").removeEventListener('click', runArray);
            //return alert("restart round");
            // console.log(this);
            //resetRound(runArray);
            //return false;
        }
    } else {
        if (runArray.length == r.length) {
         $(".top-left-circle").off("click");
        $(".top-right-circle").off("click");
        $(".bottom-left-circle").off("click");
        $(".bottom-right-circle").off("click");
            nextRound(runArray);

        } else {
            console.log("keep gan");
        }
    }
}


// function check(runArray, countUserClick, sectionClicked) {
//     console.log("runArray: " + runArray);
//     console.log("runArray.length: " + runArray.length);
//     console.log("countUserClick: " + countUserClick);
//     console.log("runArray[countUserClick]: " + runArray[countUserClick]);
//     console.log("sectionClicked: " + sectionClicked);
//     console.log("\n");

//     if (runArray[countUserClick] != sectionClicked) {
//         if (strictMode) {
//             //resetGame();
//             return alert("reset game");
//         } else {
//             return alert("restart round");
//         }
//     } else {
//         // we've determined that the user clicked the correct button
//         // now we need to check if the countUserClick is equal to the length of runArray
//         // 
//         if (runArray.length == countUserClick) {
//             return alert("u won, next round");
//         } else {
//             console.log('keep gan');
//             //countUserClick++;
//             console.log(countUserClick);
//         }
//     }
//     // if it's true, then increment 



//     // need to have array out of bounds check
//     // runArray[countUserClick] == sectionClicked
//     // if that's true, then increment  countUserClick++
//     // before returning, if countUserClick exceeds the length of runArray, then you 
//     // if it's false, either restart game or round, depending on strict mode.



// }

// after the display is over, then listen for user input
// listenUserInput(runArray);
// function listenUserInput(runArray) {
//     console.log("listening...");
//     var p, result = [];
//     //console.log("count:" + count);
//     var lengthOfArray = runArray.length;
//     var runArrayIndex;
//     console.log("runArray");
//     console.log(runArray);
//     console.log("\n");
//     var isInputCorrect;

//     $(".top-left-circle").click(function() {
//         p = $(".top-left-circle");
//         p.fadeOut('slow', function() {
//             p.css("opacity", ".75");
//         });

//         p.fadeIn('slow', function() {
//             p.css("opacity", "1");
//         });

//         result.push(0);
//        // userCount++;
//         audio = new Audio('../music/simonSound1.mp3');
//         audio.play();

//         // compare arrays  
//         isInputCorrect = checkUserInput(runArray, result);
//     });

//     $(".top-right-circle").click(function() {
//         p = $(".top-right-circle");
//         p.fadeOut('slow', function() {
//             p.css("opacity", ".75");
//         });

//         p.fadeIn('slow', function() {
//             p.css("opacity", "1");
//         });
//         result.push(1);
//         audio = new Audio('../music/simonSound2.mp3');
//         audio.play();
//          isInputCorrect = checkUserInput(runArray, result);
//     });
//     $(".bottom-left-circle").click(function() {
//         p = $(".bottom-left-circle");
//         p.fadeOut('slow', function() {
//             p.css("opacity", ".75");
//         });

//         p.fadeIn('slow', function() {
//             p.css("opacity", "1");
//         });
//         result.push(2);
//         audio = new Audio('../music/simonSound3.mp3');
//         audio.play();
//          isInputCorrect = checkUserInput(runArray, result);
//     });
//     $(".bottom-right-circle").click(function() {
//         p = $(".bottom-right-circle");
//         p.fadeOut('slow', function() {
//             p.css("opacity", ".75");
//         });

//         p.fadeIn('slow', function() {
//             p.css("opacity", "1");
//         });
//         result.push(3);
//         audio = new Audio('../music/simonSound4.mp3');
//         audio.play();
//         isInputCorrect = checkUserInput(runArray, result);
//     });
// }

// function check(runArray, result) {

//     var indexToCheck = result.length - 1;
//     var maxRuns = runArray.length;
//     console.log(maxRuns);
//     if (runArray[indexToCheck] != result[indexToCheck]) {

//         if (strictMode) {
//             //reset();
//             console.log("you lose.reset.");
//             resetToRoundOne();
//         } else {
//             console.log("you lose. restart round");
//             resetRound(runArray);
//         }
//     } else {
//         console.log("you win this round");
//     }

// }