const number = document.querySelector(".number");
const convert = document.querySelector(".convert");
const binary = document.querySelector(".binary");
const hexa = document.querySelector(".hexa");
const octal = document.querySelector(".oct");

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
  octal.append(octNum);
}

function resetValue() {
  number.value = "";
  binary.innerText = "";
  hexa.innerText = "";
}

//EVENTS
convert.addEventListener("click", conversions);
reset.addEventListener("click", resetValue);
