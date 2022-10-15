/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// const meterToFeet = 3.280
// const feetToMeter = 0.304
// const literToGallon = 

let inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")

buttonEl.addEventListener("click", function convertLength() {
    toFeet = inputEl.value * 3.281 
})

// function convertVolume {

// }

// function convertMass {

// }
