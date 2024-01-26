//Logic of Decimal to Binary

const deciToBin = (decimal) => {
  let power = 0;
  let binNum = 0;
  while (decimal > 0) {
    let remainder = decimal % 2;
    binNum = binNum + remainder * Math.pow(10, power);

    power++;
    decimal = Math.floor(decimal / 2);
  }

  return binNum;
};


let userInput  = document.getElementById("input")
let output = document.getElementById("textarea")
let convertButton = document.getElementById("convert")
let resetButton = document.getElementById("reset")


convertButton.addEventListener("click", () => {
  let decimalInput = parseInt(userInput.value);
  let convertedValue = deciToBin(decimalInput);
  output.textContent = convertedValue;
  
 

});


resetButton.addEventListener("click",()=>{
  userInput.value = "";
  output.textContent = "";
})

