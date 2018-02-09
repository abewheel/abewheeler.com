$(document).ready(function() {
	// Set header
	$('.menu-header').load('/shared/header.html');
	$('.footer').load('/shared/footer.html');

	// Smooth scroll
	$('a[href^="#"]').on("click", function(e) {
		e.preventDefault();
		var target = this.hash, $target = $(target);
		$("html, body").stop().animate({
			scrollTop: $target.offset().top - 100
		}, 1000, "swing", function() {
			window.location.hash = target;
		});
	});
});

//FROM CODEPEN MARIO KLINGEMANN
// Color navbar
var colors = new Array(
	[84, 61, 255],
	[255,35,98],
	[250, 172, 168],
	[255,195,113],
	[255,95,109]
    //[45,175,230]
    );

var step = 0;

var colorIndices = [ 0, 1, 2, 3 ];

var gradientSpeed = .002;

function updateGradient() {
	if ($ === undefined) return;
	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];
	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
	$(".color-change").css({
		background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
	}).css({
		background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
	});
	step += gradientSpeed;
	if (step >= 1) {
		step %= 1;
		colorIndices[0] = colorIndices[1];
		colorIndices[2] = colorIndices[3];
        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
}

setInterval(updateGradient, 10);