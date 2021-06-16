// array to hold hexadecimal digits
const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

// declare const(s) to access objects on the DOM
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const spanColor = document.getElementById("bg-color");

// testing onLoad event
window.addEventListener('load', (event) => {
    // console.log('The page has fully loaded');
    console.log("page load event listener is firing");
    // receiving color (from HEX page)
    var passHexColor = sessionStorage.getItem("passHexColor");
    var currentRGBColor = '';

    // if/else to see if there's a stored value coming in
    // if received value is null, alert user AND generate a new color
    if (passHexColor == null) {
        console.log("pageLoad -> if statement is firing");
        console.log("(passHexColor is currently null...)");

        // call createRGB to generate an RGB color
        currentRGBColor = createRGB();

        spanColor.textContent = currentRGBColor;

        document.body.style.backgroundColor = currentRGBColor;

    } 
    // if there's a received value, convert and apply to background
    else {
        console.log("pageLoad - > else statement is firing");
        console.log(passHexColor);
        // console.log(hexToRGB(passHexColor));

        currentRGBColor = hexToRGB(passHexColor);

        console.log(`PassHexColor: ${passHexColor} RGBColor: ${currentRGBColor}`)

        //spanColor.textContent = currentRGBColor;
        // Turn the array into the pretty string for the user to see :) 
        spanColor.textContent = 'rgb (' + currentRGBColor.join(',') + ')';


       
        /**
         * This is essentially setting the background like this
         * body {
         *  background-color: 30,30,03;
         * }
         * 
         * But that isn't a valid css value for the background-color property 
         * But we can do something like this: 
         * document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
         * or this: 
         * document.body.style.backgroundColor = 'rgb(' + [a,b,c].join(',') + ')';
         * Or something to get the rgb value set correctly 
         * 
         */
        //document.body.style.backgroundColor = currentRGBColor;

        // This is my favorite as I changed the hexTpRGB method to return an array. 
        document.body.style.backgroundColor = 'rgb(' + currentRGBColor.join(',') + ')';
        
    }

    // pass color RGB to HEX
    let passRGBColor = document.getElementById("bg-color").textContent;
    sessionStorage.setItem("passRGBColor", passRGBColor);

});

// this function converts a 6-digit hexadecimal color to its equivilant RGB value
function hexToRGB(hexInc) {
    console.log("hexToRGB is firing");
    // get individual red, green, and blue values
    let hexR = hexInc.slice(1, 3);
    let hexG = hexInc.slice(3, 5);
    let hexB = hexInc.slice(5, 7);

    // convert to RGB equivilants
    let rgbR = hexConvert(hexR);
    let rgbG = hexConvert(hexG);
    let rgbB = hexConvert(hexB);

    // construct RGB value as string
    let newRGBColor = "rgb (" + rgbR + ", " + rgbG +
                      ", " + rgbB + ")";

    // Construct RGB value as an array, this will make this easy later. 
    // We can display it as the string about for the user later
    
    let newColor = [];
    newColor.push(rgbB)
    newColor.push(rgbG)
    newColor.push(rgbR)

    // return to caller
    //return newRGBColor
    return newColor;
}

// to convert a two-digit hex to decimal
function hexConvert(incomingHexColor) {
    console.log("hexConvert is firing");
    // turn two-digit hexademical number into a string of single hex digits
    let hexSingles = Array.from(incomingHexColor);     // let or var?

    // convert each to binary, add to get RGB value
    let newRGB = ((hex.indexOf(hexSingles[0]) * 16**1) + (hex.indexOf(hexSingles[1]) * 16**0));
    console.log(newRGB);

    return newRGB;
}



// event listener for id="btn" (text: CLICKME)
// --> every 'click' event calls this anonymous function:
btn.addEventListener('click', function() {
    console.log("anonymous button event listener is firing");
    
    // call createRGB to generate an RGB color
    let currentRGBColor = createRGB();

    // set the textContent of the 
    color.textContent = currentRGBColor;

    // 
    document.body.style.backgroundColor = currentRGBColor;

    // update session variable
    passRGBColor = currentRGBColor;
    sessionStorage.setItem("passRGBColor", passRGBColor);

});

// this function generates a random RGB color value
function createRGB() {
    console.log("createRGB is firing");
    // declare hexColor, set it equal to '#' at start (all hex colors need this)
    let rColor = '';
    let gColor = '';
    let bColor = '';

    // get random numbers between 0 and 255
    rColor += getRandomNumber();
    gColor += getRandomNumber();
    bColor += getRandomNumber();

    // combine RGB values
    let myRGBColor = 'rgb(' + rColor + ', ' + gColor + ', ' +
                    bColor + ')';

    return myRGBColor;
}

// function to get a random number from 0 to F (hex[0] to hex[15])
function getRandomNumber() {
    console.log("getRandomNumber is firing");
    return Math.floor(Math.random() * 256);
}


// TEST - passing variable between pages (PASSING: RGB to Hex)
// var favoriteMovie = "Shrek";
// sessionStorage.setItem("favoriteMovie", favoriteMovie);

// TEST - passing variable between pages (RECEIVING: hex to RGB)
// var secondFavoriteMovie = sessionStorage.getItem("secondFavoriteMovie");
// if (secondFavoriteMovie != null){
//     console.log(secondFavoriteMovie);
// }