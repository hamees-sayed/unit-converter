let num = 0
let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let resetEl = document.getElementById("reset-el")
let length = document.getElementById("feet&Meter")
let mass = document.getElementById("liter&Gallon")
let volume = document.getElementById("kilo&Pound")


buttonEl.addEventListener("click", function() {
    num = inputEl.value
    convertLength()
    convertVolume()
    convertMass()
})

resetEl.addEventListener("click", function() {
    inputEl.value = 0
    num = 0
    convertLength()
    convertVolume()
    convertMass()
})

function convertLength() {
    let toFeet = (num * 3.281).toFixed(3)
    let toMeter = (num * 0.304).toFixed(3)
    
    length.textContent = `${num} meters = ${toFeet} feet | ${num} feet = ${toMeter} meters`
}

function convertVolume() {
    let toLiter = (num * 3.785).toFixed(3)
    let toGallon = (num * 0.264).toFixed(3)

    mass.textContent = `${num} liters = ${toGallon} gallons | ${num} gallons = ${toLiter} liters`
}

function convertMass() {
    let toKilo = (num * 0.453).toFixed(3)
    let toPound = (num * 2.204).toFixed(3)

    volume.textContent = `${num} kilos = ${toPound} pounds | ${num} pounds = ${toKilo} kilos`
}
