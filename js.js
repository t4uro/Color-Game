var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.getElementById("displayColor");
var message = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

displayColor.textContent = pickedColor;

resetButton.addEventListener("click", function() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change color display
	displayColor.textContent = pickedColor;
	// change colors of square
	for(var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "#3b80ef";
})

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = 'none';
		}
	}
})

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = 'block';
	}
})

for (var i = 0; i < colors.length; i++) {
	// add initial colors to squares
	square[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	square[i].addEventListener("click", function() {
        // grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// comper colors
		if (clickedColor === pickedColor) {
			changeColor(clickedColor);
			message.textContent = "Correct!";
			resetButton.textContent = "Play Again!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
		}

	})
}

function changeColor(color) {
	// loop all squares and change their background colors
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	// return array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}