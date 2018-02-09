$(document).ready(function() {
    // Greet user by time of day
    var greeting = "";
    var hour = new Date().getHours();
    if (hour >= 4 && hour < 12) {
       greeting = "Good morning";
    } else if (hour >= 12 && hour < 17) {
       greeting = "Good afternoon";
    } else if (hour >= 17 && hour < 21) {
       greeting = "Good evening";
    } else {
       greeting = "Hi";
    }
    var greetingHeader = document.getElementById("greeting");
    greetingHeader.innerHTML = greeting + ", I'm Abe.";

    // Navbar color on scroll
    var fadedIn = false;
    $(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	if(!fadedIn && scroll > 5) {
    		$(".navbar").fadeIn("slow");
    	}
    });
});