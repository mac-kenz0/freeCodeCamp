// /* the important parts */

// v//ar channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// var htmlChannels = "";
// for (var i = 0; i < channels.length; i++) {
//     $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channels[i] + '?callback=?', data => {
//       console.log(data);
//         // if (stream.null)
//         // htmlChannels += "data.stream";

//     });
// }
// console.log("\n\n");
// ///users/:user
// for (var i = 0; i < channels.length; i++) {
//    $.getJSON('https://wind-bow.gomix.me/twitch-api/user/' + channels[i] + '?callback=?', data => {
//         // if (stream.null)
//         // htmlChannels += "data.stream";
//   console.log(data);
//     });
//  }
// /* scratch work */
function checkStream (data, domElement){
    console.log(data);
  if (data.stream === null){
     $(domElement).append("not streaming");
  } else if (data.stream === undefined){
       $(domElement).append("never existed");
  } else {
    $(domElement).append("streaming " + data.stream.game);
  }
}

function goTo (url) {
  window.location.href = url;
}

$(document).ready(function() {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + "ESL_SC2" + '?callback=?', data => {
        domElementContainer = "#ESL_SC2";
        domElement = "#ESL_SC2 .streaming-boolean";
        checkStream(data, domElement);
        $(domElementContainer).on("click", function(){
           goTo("http://www.twitch.com/" + "ESL_SC2");
        });
       
    });
     $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + "freeCodeCamp" + '?callback=?', data => {
        domElementContainer = "#freeCodeCamp";
        domElement = "#freeCodeCamp .streaming-boolean";
        checkStream(data, domElement);
         $(domElementContainer).on("click", function(){
             goTo("http://www.twitch.com/" + "freeCodeCamp");
        });
     
    });
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + "comster404" + '?callback=?', data => {
        domElementContainer = "#comster404";
        domElement = "#comster404 .streaming-boolean";
        checkStream(data, domElement);
        $(domElementContainer).on("click", function(){
             goTo("http://www.twitch.com/" + "comster404");
        });
    });

});