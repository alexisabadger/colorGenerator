// array to hold hexadecimal digits
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// declare const(s) to access objects on the DOM
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const spanColor = document.getElementById("bg-color");

// testing onLoad event
window.addEventListener('load', (event) => {
    // console.log('The page has fully loaded');

    // call createHex to generate a hex color
    let currentHexColor = createHexColor();

    // set the textContent of the
    spanColor.textContent = currentHexColor;

    document.body.style.backgroundColor = currentHexColor;

    // pass color HEX to RGB
    let passHexColor = document.getElementById("bg-color").textContent;
    sessionStorage.setItem("passHexColor", passHexColor);

    // receiving color (from RGB)
    var passRGBColor = sessionStorage.getItem("passRGBColor");
    // if received value is null, alert user
    // if (passRGBColor == null) {
        // console.log("passRGBColor is currently null...");
    // } 
    // if there's a received value, convert and apply to background
    // else {
        // console.log(passRGBColor);
        // console.log("The hex value is: " + rgbToHex(passRGBColor));
    // }
});

// take the received RGB color string, break into R, G, B values
function breakRGB(rgbString) {
    
}

// RGB to hex conversion functions
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}




// event listener for id="btn" (text: CLICKME)
// --> every 'click' event calls this anonymous function:
btn.addEventListener('click', function() {

    // call createHex to generate a Hex color value
    let currentHexColor = createHexColor();

    // set the textContent of the 
    color.textContent = currentHexColor;

    // 
    document.body.style.backgroundColor = currentHexColor;

    // update session variable
    passHexColor = currentHexColor;
    sessionStorage.setItem("passHexColor", passHexColor);
});

// this function generates a random hex color value
function createHexColor() {
    // declare hexColor, set it equal to '#' at start (all hex colors need this)
    let hexColor = '#';

    // loop to add hex digits to hexColor
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}

// function to get a random number from 0 to F (hex[0] to hex[15])
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// TEST - passing variables between pages (RECEIVING: rgb to hex)
// var favoriteMovie = sessionStorage.getItem("favoriteMovie");
// if (favoriteMovie != null){
//     console.log(favoriteMovie);
// }

// TEST - passing color between pages (PASSING: hex to rgb)
// var secondFavoriteMovie = "Finding Nemo";
// sessionStorage.setItem("secondFavoriteMovie", secondFavoriteMovie);
