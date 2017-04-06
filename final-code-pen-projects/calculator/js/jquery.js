$(document).ready(function($) {
    var equation = "";

    $("#zero").on("click", function() {
        equation += 0;
        $("#answer").html(equation);
    });
    $("#one").on("click", function() {
        equation += 1;
        $("#answer").html(equation);
    });

    $("#two").on("click", function() {
        equation += 2;
        $("#answer").html(equation);
    });
    $("#three").on("click", function() {
        equation += 3;
        $("#answer").html(equation);
    });
    $("#four").on("click", function() {
        equation += 4;
        $("#answer").html(equation);
    });
    $("#five").on("click", function() {
        equation += 5;
        $("#answer").html(equation);
    });
    $("#six").on("click", function() {
        equation += 6;
        $("#answer").html(equation);
    });
    $("#seven").on("click", function() {
        equation += 7;

        $("#answer").html(equation);
    });
    $("#eight").on("click", function() {
        equation += 8;

        $("#answer").html(equation);
    });
    $("#nine").on("click", function() {
        equation += 9;

        $("#answer").html(equation);
    });

    $("#multiply").on("click", function() {
        equation += "*";
        $("#answer").html(equation);
    });
    $("#divide").on("click", function() {
        equation += "/";
        $("#answer").html(equation);
    });
    $("#add").on("click", function() {
        equation += "+";
        $("#answer").html(equation);
    });
    $("#subtract").on("click", function() {
        equation += "-";
        $("#answer").html(equation);
    });

    $("#equals").on("click", function() {

        try {
            var result = eval(equation);
            $("#answer").html(eval(result));
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);
            }
        }        
        equation = "";

    });
    $("#decimal").on("click", function() {
        equation += ".";
        $("#answer").html(equation);
    });
    $("#clearContent").on("click", function() {
        equation = "";
        $("#answer").html("");
    });
});