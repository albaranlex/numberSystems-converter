//SELECTORS
const number = document.querySelector(".number");
const convert = document.querySelector(".convert");
const reset = document.querySelector(".reset");
const binary = document.querySelector(".binary");
const hexa = document.querySelector(".hexa");
const oct = document.querySelector(".oct");

//FUNCTiONS
function conversions() {
  //binary
  let binaryNum = Number(number.value).toString(2);
  //hexa
  let hexaNum = Number(number.value).toString(16);
  //octal
  let octNum = Number(number.value).toString(8);
  //delete initial value
  binary.innerText = "";
  hexa.innerText = "";
  oct.innerText = "";
  //append
  binary.append(binaryNum);
  hexa.append(hexaNum);
  oct.append(octNum);
  convert.disabled = true;
}

function resetValue() {
  number.value = "0";
  binary.innerText = "0";
  hexa.innerText = "0";
  oct.innerText = "0";
  convert.disabled = false;
}

//EVENTS
convert.addEventListener("click", conversions);
reset.addEventListener("click", resetValue);
number.addEventListener("click", resetValue);

//note to self: make input textfeld blank on click or on focus.
