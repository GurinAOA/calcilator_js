"use strict";

let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "2", "3", "4", "5", "6", "7", "8", "9", ","];
const action = ["+", "-", "x", "÷", "+/-", "%"];

const out = document.querySelector(".result p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".clear").addEventListener("click", clearAll);

document.querySelector(".calculator").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("clear")) return;
  out.textContent = "";

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b = +key;
      out.textContent = b;
    }

    return;
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "÷":
        if (b == "0") {
          out.textContent = "error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
      case "+/-":
        a = -1 * a;
        break;
      case "%":
        a = a / 100;
        break;
    }
    finish = true;
    out.textContent = a;
  }
};
