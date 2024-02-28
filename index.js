/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
let metersToFeet = "";
let feetToMeters = "";
let litersToGallons = "";
let gallonsToLiters = "";
let kilosToPounds = "";
let poundsToKilos = "";
// 1. when convertBtn is clicked, capture the value in variable
convertBtn.addEventListener("click", function () {
  calculate(inputEl.value);
  renderConvertedInput();
});

function calculate(inputVal) {
  metersToFeet = (inputVal * 3.281).toFixed(3);
  feetToMeters = (inputVal / 3.281).toFixed(3);
  litersToGallons = (inputVal * 0.264).toFixed(3);
  gallonsToLiters = (inputVal / 0.264).toFixed(3);
  kilosToPounds = (inputVal * 2.204).toFixed(3);
  poundsToKilos = (inputVal / 2.204).toFixed(3);
}

const convertedInput = document.querySelectorAll(".converted-input");
// capture the div el that has the class "converted-input"
function renderConvertedInput() {
  convertedInput[0].innerHTML = `${inputEl.value} meters = ${metersToFeet} feet | ${inputEl.value} feet = ${feetToMeters} meters`;
  convertedInput[1].innerHTML = `${inputEl.value} liters = ${litersToGallons} gallons | ${inputEl.value} gallons = ${gallonsToLiters} liters`;
  convertedInput[2].innerHTML = `${inputEl.value} kilos = ${kilosToPounds} pounds | ${inputEl.value} pounds = ${poundsToKilos} kilos`;
}

