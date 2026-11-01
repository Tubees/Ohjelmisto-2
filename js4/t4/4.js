"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

const target = document.getElementById("target");

for (const i of students) {
  let option = document.createElement("option");
  option.setAttribute("value", i.id);
  option.innerHTML = i.name;
  target.appendChild(option);
}
