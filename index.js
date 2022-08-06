


var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6
 
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice2.png

var randomImageSource = "images/" + randomDiceImage;  //images/dice2.png

var image1= document.querySelectorAll("img")[0];  //selects the image you want changed

image1.setAttribute("src" , randomImageSource); 

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var radnomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , radnomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!"
} 
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!"
} else if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!"
}