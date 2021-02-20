const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

let currentDisplay = [];
buttons.addEventListener("click", e => {
  console.log(e.target.innerText);
  if (e.target.innerText === "=") return;
  let newDisplay = display.innerText;
  if (Number(e.target.innerText)) {
    currentDisplay.length > 0
      ? (currentDisplay[currentDisplay.length - 1] =
          currentDisplay[currentDisplay.length - 1] + e.target.innerText)
      : currentDisplay.push(e.target.innerText);
  } else {
    currentDisplay = [...currentDisplay, e.target.innerText, ""];
  }
  newDisplay = newDisplay + e.target.innerText;
  display.innerText = newDisplay;
});

function calculate() {
  let calculation = "";
  currentDisplay.forEach((item, idx) => {
    if (Number(currentDisplay[idx - 1])) {
      if (!Number(item)) {
        const calculateCurrentNumbers = eval(
          currentDisplay[idx - 1] + item + currentDisplay[idx + 1]
        );
        calculation = Number(calculation)
          ? calculation + calculateCurrentNumbers
          : calculateCurrentNumbers;
        currentDisplay[idx - 1] = "" + calculateCurrentNumbers;
        currentDisplay.splice(idx, idx + 1);
        calculate();
      }
    }
    console.log(currentDisplay);
    console.log(calculation);
  });
  display.innerText = currentDisplay[0];
}

//Is not setup to calculate multuply and devide first, the rest works... I think
const calculate = document.getElementById("calculate");
calculate.addEventListener("click", () => {
  calculate();
});
