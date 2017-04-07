//var i, strictMode,
//   a = [];
//var count = 0;
const maxRounds = 5;

function generateArray() {
    a = [];
    for (i = 0; i < maxRounds; i++) {
        a[i] = Math.floor(Math.random() * 4);
    }

    return a;
}

$('#strict').click(function() {
    strictMode = true;
});


$('#start').click(function() {
    var a = generateArray();
    count = 1;
    displayArray(a, count);
});

function displayArray(a, count) {
    var time = 1000;
    var i;
    console.log(a);

    var runArray = a.slice(0, count);

    $.each(runArray, function(i, value) {
        setTimeout(function() {
            console.log(value);
            toggleButton(value);
            
            console.log("\n");
        }, time)
        time += 1500;
    });
               
    setTimeout(function() {
        listenUserInput(runArray);
    }, time);
}

function toggleButton(i) {
    console.log("toggle" + i);
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

function listenUserInput (runArray){
    console.log(runArray);
    var r = [];
     $(".top-left-circle").click(function() {
        toggleButton(0);
        r.push(0);
        check(runArray, r);
     });
     $(".top-right-circle").click(function() {
        toggleButton(1);
        r.push(1);
        check(runArray, r);
     });
     $(".bottom-left-circle").click(function() {
        toggleButton(2);
        r.push(2);
        check(runArray, r);
     });
     $(".bottom-right-circle").click(function() {
        toggleButton(3);
        r.push(3);
        check(runArray, r);
     });
}

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

function check(runArray, result) {
   for (i =0; i < result.length; i++){
    if (result[i] != runArray[i]){
        console.log("no go");
    }
    else {
        if (result.length != runArray.length){
            console.log("do nothing");
        }
        else{
            console.log("won this round");
            alert("ready for next round ?");
            nextRound();
        }
    }
   }
}
function nextRound(){
    console.log(" ");
    console.log("New Round");
    count++;
    console.log(a);
     console.log(count);
    displayArray(a, count);
}



