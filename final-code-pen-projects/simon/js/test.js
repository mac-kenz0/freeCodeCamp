 var i, strictMode, a = [];
var count = 1;
const maxRounds = 3; // 


for (i = 0; i < maxRounds; i++) {
    a[i] = Math.floor(Math.random() * 4);
}
console.log(a);
var time =1000;
$.each(a, function(i,value ) {
  	  setTimeout( function(){ toggleButton(value);}, time)
      time += 1000;
});


function test (){
	console.log("gi");
}
//  function displayArray(a) {
//  	$.each(a, function(i ) {
//   		console.log( i);
// 	});
//  	// so first I want to iterate through i
//  	// but before i increments, I want to complete the toggleBUtton function
//  	// i = 0;
//  	// while ( i < count){

//  	// }
//  }

// displayArray();
// function positionCards() {
//   $cards = $('#gameboard .card');
//   $cards.each(function() {
//       setTimeout( function(){ addPositioningClass($(this)); }, 500 )
//   });
// }

// function addPositioningClasses($card){
//   $card
//     .addClass('position')
// }

// function positionCards() {
//   $cards = $('#gameboard .card');

//   var time = 500;

//   $cards.each(function() {
//       setTimeout( function(){ addPositioningClass($(this)); }, time)
//       time += 500;
//   });
// }


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