// first find and grab the element you want to change
// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("first");
// const elm =document.querySelector(".info1");
// for css selector
const elm = document.querySelector("#first");
console.log(elm);
// const elm =document.querySelectorAll(".info1");
// selects  the first element from the document.
// const elm = document.getElementsByTagName("div");
// const elm = document.getElementsByTagName("div>div");
// console.log(elm);

// apply the change
// document.write("fjalfjalgj");
// const display = document.getElementsByClassName("display")[0];
// const txt =
// display.innerHTML = "<h1> Click me</h1>";
// display.setAttribute("id", "test");
// display.setAttribute("style", "color:red;font-size:2rem");
// display.setAttribute("href", "facebook.com");

// const elm = document.querySelector("a");
// const elm = document.querySelector("a");
// elm.style.color = "red";
// elm.style.fontSize = "2rem";
// elm.style.textDecoration = "none";
// elm.style.display = "none";
// elm.style.display = "block";
// const display = document.querySelector(".display");

// const func = () => {
//   display.classList.toggle("success");
// };
// to re
const display = document.getElementsByClassName("display")[0];
let eve = display.innerText;
display.addEventListener("click", () => {
  eve = eve.split("").reverse().join("");
  console.log(eve);
});

// console.log(elm.attributes.href.value);

// console.log(display);
// console.log(display);
// console.log(display);
// console.log(display);
// console.log(display);
// console.log(display);
// console.log(display);
