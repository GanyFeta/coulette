// Log "Welcome to Coulette" to the console in your script file
console.log("Wellcome to Coulette!");
// Skript-p48 addEventListner()

changeColor();
// JS Code to change header Color
function changeColor() {
	let header = document.querySelector("header");
	header.style.backgroundColor = randomHexColor();
	//Suche nach dem DOM-Element #colorValue und schreibe das Ergebnis in blub
	let blub = document.querySelector("#colorValue");
	//BackgroundColor-Wert im DOM-Element wiedergeben
	blub.innerText = header.style.backgroundColor;
}

// search btn in my document
let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);

//::::::::: Given Code :::::::::::

/**
 * Toggle color of header
 * Generate random number between min and max
 */
function randomNumber(min, max) {
	const num = Math.random() * (max - min + 1) + min;
	return Math.floor(num);
}

/**
 * Generate random hex number for color
 */
function randomHexNumber() {
	let hex = randomNumber(0, 255).toString(16);
	if (hex.length === 1) {
		hex = "0" + hex;
	}
	return hex;
}

/**
 * Generate random hex color
 */
function randomHexColor() {
	const red = randomHexNumber();
	const green = randomHexNumber();
	const blue = randomHexNumber();

	return ("#" + red + green + blue).toUpperCase();
}

//::::::::.. End Given Code
