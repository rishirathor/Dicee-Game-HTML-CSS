var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImageSrc1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 win!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 win!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
