const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "red";
}

const colorButton = document.getElementById("colorButton");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
colorButton.addEventListener("click", () => {
  first.style.color = "green";
  second.style.color = "yellow";
  third.style.color = "blue";
});
