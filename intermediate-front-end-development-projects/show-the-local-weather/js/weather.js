
$(document).ready(function() {
	$.simpleWeather({
		location: 'Austin, TX',
		woeid: '',
		unit: 'f',
		success: function(weather) {
			$("#city").html(weather.city);
			$("#display_F").html(weather.temp + "&deg;" + weather.units.temp);
			$("#display_C").html(weather.alt.temp + "&deg;" + weather.alt.unit).css("display", "none");
			$("#changeBtnToC").html('Change to c°');
			$("#changeBtnToF").html('Change to F°').css("display", "none");
			$("#icon").attr("src", weather.thumbnail);
		},
		error: function(error) {
			$("#weather").html('<p>' + error + '</p>');
		}

	});

			$("#changeBtnToF").on("click", function() {
				$("#display_F").css("display", "block");
				$("#changeBtnToC").css("display", "block");
				$("#changeBtnToF").css("display", "none");
				$("#display_C").css("display", "none");
			});
			$("#changeBtnToC").on("click", function() {
				$("#display_C").css("display", "block");
				$("#changeBtnToF").css("display", "block");
				$("#changeBtnToC").css("display", "none");
				$("#display_F").css("display", "none");
			});
	

});
