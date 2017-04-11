function getRandomNumber(i) {
    return Math.floor((Math.random() * i) + 1);;
}

function generateRandomQuote() {
    $.getJSON("http://res.cloudinary.com/da9zefzms/raw/upload/v1488118154/quotes_json_os823q.json", function(json) {
        var i = getRandomNumber(JSON.stringify(json.length) - 1);
        $("#quoteBlock").html(JSON.stringify(json[i].quote));
    });
}

$(document).ready(function() {
    generateRandomQuote();
    $("#quoteBtn").on("click", function() {
        generateRandomQuote();
    });
});