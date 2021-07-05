// Log "Welcome to Coulette" to the console in your script file
console.log("Wellcome to Coulette!");
// Skript-p48 addEventListner()

//make var: header with "header" inside and search for it
let header = document.querySelector("header");
console.log(header);

// JS Code to change header Color
function changeColor() {
	let header = document.querySelector("header");
	let headerBg = header.style.backgroundColor;
	if (headerBg === "turquoise") {
		header.style.backgroundColor = "white";
	} else {
		header.style.background = "turquoise";
	}
}

// search btn in my document
let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);
