var css = document.querySelector("h3"); //grabs the only h3 tag on the page
var color1 = document.querySelector(".color1"); //grabs css' "color1" class selector
var color2 = document.querySelector(".color2"); //grabs css' "color2" class selector
var body = document.getElementById("gradient"); //grabs html's background ID

//checing to see if each variable works 
	// console.log(css);
	// console.log(color1);
	// console.log(color2);
	//console.log(body);

//changes background from color1's value to color2's value on a linear gradient (left to right)
function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", "
    + color2.value + ")";

    css.textContent = body.style.background + ";";
}

//testing to see if I can change the background from here
// body.style.background  = "red";

//detects when user's input changes on color1
color1.addEventListener("input", setGradient);

//detects when user's input changes on color2
color2.addEventListener("input", setGradient);