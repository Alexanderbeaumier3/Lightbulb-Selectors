// Write your code here
const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle");

var count = 0;

function handleClick() {

  count++;

  subtitle.textContent = `You've clicked the lights ${count} times`;

  lightbulb1.classList.toggle("active");
  lightbulb2.classList.toggle("active");
  lightbulb3.classList.toggle("active");
}

lightbulb1.addEventListener("click", handleClick);
lightbulb2.addEventListener("click", handleClick);
lightbulb3.addEventListener("click", handleClick);