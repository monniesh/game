//for first dice//
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = "dice" + randomNumber1  +".png";

var randomImageSource = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//for second dice//
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = "dice" + randomNumber2  +".png";

var randomImageSource = "images/" + randomDiceImages;


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

// declaring winner using loop//

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩player 1 wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins🚩";
}

else{
   document.querySelector("h1").innerHTML = "draw!";
}
