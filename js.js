var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numberSquares = 3;
  colors = generateRandomColors(numberSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numberSquares = 6;
  colors = generateRandomColors(numberSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  //generate all new colors from array
  colors = generateRandomColors(numberSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colorDisplay
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color to pickedColor
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Corret well done!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop througth all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  };
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //reapet num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
