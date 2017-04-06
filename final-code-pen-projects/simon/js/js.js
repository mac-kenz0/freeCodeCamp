var i, strictMode, displayArray = [],
    a = [];
const maxRounds = 3; // 


for (i = 0; i < maxRounds; i++) {
    a[i] = Math.floor(Math.random() * 4);
}
$('#strict').click(function() {
	 strictMode = true;
});

$('#start').click(function() {
    var x = 0;
    var count = 1;

    //function displayArray(count);
    function go() {


        if (x < maxRounds) {
            toggleButton(a, x);
            setTimeout(go, 2000);
            x++;
        }
    }
    //go();
    go();
    // after that function is complete...
    setTimeout(function() {
        listenUserInput();
    }, 2000 * maxRounds);
});
function displayArray(count){

}



function toggleButton(a, i) {
    var p;
    var audio;

    if (a[i] == 0) {
        p = $(".top-left-circle");
        audio = new Audio('../music/simonSound1.mp3');
    }
    if (a[i] == 1) {
        p = $(".top-right-circle");
        audio = new Audio('../music/simonSound2.mp3');
    }
    if (a[i] == 2) {
        p = $(".bottom-left-circle");
        audio = new Audio('../music/simonSound3.mp3');
    }
    if (a[i] == 3) {
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



// after the display is over, then listen for user input
function listenUserInput() {
    var p, result = [];

    $(".top-left-circle").click(function() {
    	p = $(".top-left-circle");
    	p.fadeOut('slow', function() {
        p.css("opacity", ".75");
    	});

    p.fadeIn('slow', function() {
        p.css("opacity", "1");
    });
        result.push(0);
        audio = new Audio('../music/simonSound1.mp3');
        audio.play();
        checkUserInput(a, result);
    });

    $(".top-right-circle").click(function() {
    	p = $(".top-right-circle");
    	 p.fadeOut('slow', function() {
        p.css("opacity", ".75");
    });

    p.fadeIn('slow', function() {
        p.css("opacity", "1");
    });
        result.push(1);
        audio = new Audio('../music/simonSound2.mp3');
        audio.play();
        checkUserInput(a, result);
    });
    $(".bottom-left-circle").click(function() {
    	p = $(".bottom-left-circle");
    	    p.fadeOut('slow', function() {
        p.css("opacity", ".75");
    });

    p.fadeIn('slow', function() {
        p.css("opacity", "1");
    });
        result.push(2);
        audio = new Audio('../music/simonSound3.mp3');
        audio.play();
        checkUserInput(a, result);
    });
    $(".bottom-right-circle").click(function() {
    	p = $(".bottom-right-circle");
    	    p.fadeOut('slow', function() {
        p.css("opacity", ".75");
    });

    p.fadeIn('slow', function() {
        p.css("opacity", "1");
    });
        result.push(3);
        audio = new Audio('../music/simonSound4.mp3');
        audio.play();
        checkUserInput(a, result);
    });


}

function checkUserInput(a, result) {
    for (i = 0; i < result.length; i++) {
        if (a[i] != result[i]) {
            //alert("no go");
            if (strictMode){
            	// restart game
            } else {
            	// restart round
            }
            // depending on mode, either start the round over, or reset.
        }
    }
}