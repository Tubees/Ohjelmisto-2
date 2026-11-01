"use strict";
const names = ["John", "Paul", "Jones"];

const target = document.getElementById("target");

for (const i of names) {
  let li = document.createElement("li");
  li.textContent = i;
  target.appendChild(li);
}
