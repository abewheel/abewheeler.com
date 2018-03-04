var coinCount = 2;
var coinTotal = 57;
var inc = true;

function updateCoin() {
    if (coinCount == 1 || coinCount == coinTotal) inc = !inc;
    if (inc) coinCount++; else coinCount--;
    $("#coin").attr("src", "/images/coin/coin" + coinCount + ".png");
}

function preloadAnimationImages() {
    var list = [];
    for (var i = 1; i <= coinTotal; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        };
        list.push(img);
        img.src = "/images/coin/coin" + i + ".png";
    }
}

preloadAnimationImages();

setInterval(updateCoin, 40);