const number = document.querySelector(".number");
const convert = document.querySelector(".convert");
const reset = document.querySelector(".reset");
const binary = document.querySelector(".binary");
const hexa = document.querySelector(".hexa");
const oct = document.querySelector(".oct");

// //FUNCTiONS

// //dec to binary

function conversions() {
  //binary
  let binaryNum = Number(number.value).toString(2);
  //hexa
  let hexaNum = Number(number.value).toString(16);
  //octal
  let octNum = Number(number.value).toString(8);
  binary.append(binaryNum);
  hexa.append(hexaNum);
  oct.append(octNum);
}

function resetValue() {
  number.value = "";
  binary.innerText = "";
  hexa.innerText = "";
  oct.innerText = "";
}

//EVENTS
convert.addEventListener("click", conversions);
reset.addEventListener("click", resetValue);
