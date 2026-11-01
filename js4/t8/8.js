document.getElementById("start").addEventListener("click", calculate);

function calculate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let opt = document.getElementById("operation").value;
  let result;
  if (opt == "add") {
    result = Number(num1) + Number(num2);
  } else if (opt == "sub") {
    result = Number(num1) - Number(num2);
  } else if (opt == "multi") {
    result = Number(num1) * Number(num2);
  } else if (opt == "div") {
    result = Number(num1) / Number(num2);
  }
  document.getElementById("result").textContent = result;
}
