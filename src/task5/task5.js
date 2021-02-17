const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", e => {
  if (e.target.innerText === "=") return;
  let newDisplay = display.innerText;
  newDisplay = newDisplay + e.target.innerText;
  display.innerText = newDisplay;
});

//Can only calculate a single operator at a time
const calculate = document.getElementById("calculate");
calculate.addEventListener("click", () => {
  let currentDisplay = display.innerText;
  if (currentDisplay.includes("/")) {
    currentDisplay = currentDisplay.split("/");
    currentDisplay = "" + Number(currentDisplay[0]) / Number(currentDisplay[1]);
  }
  if (currentDisplay.includes("*")) {
    currentDisplay = currentDisplay.split("*");
    currentDisplay = "" + Number(currentDisplay[0]) * Number(currentDisplay[1]);
  }
  if (currentDisplay.includes("+")) {
    currentDisplay = currentDisplay.split("+");
    currentDisplay = "" + Number(currentDisplay[0]) + Number(currentDisplay[1]);
  }
  if (currentDisplay.includes("-")) {
    currentDisplay = currentDisplay.split("-");
    currentDisplay = "" + Number(currentDisplay[0]) - Number(currentDisplay[1]);
  }

  display.innerText = currentDisplay;
});
