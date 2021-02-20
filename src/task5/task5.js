const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

let currentDisplay = [];
buttons.addEventListener("click", e => {
  const target = e.target.innerText;
  if (target === "=") return;
  if (Number(target)) {
    currentDisplay.length > 0
      ? (currentDisplay[currentDisplay.length - 1] =
          currentDisplay[currentDisplay.length - 1] + target)
      : currentDisplay.push(target);
  } else {
    currentDisplay = [...currentDisplay, target, ""];
  }
  let newDisplay = display.innerText;
  newDisplay = newDisplay + target;
  display.innerText = newDisplay;
});

function calculateResult() {
  currentDisplay.forEach((item, idx) => {
    if (!Number(item)) {
      const calculateCurrentNumbers = eval(
        currentDisplay[idx - 1] + item + currentDisplay[idx + 1]
      );
      currentDisplay[idx - 1] = "" + calculateCurrentNumbers;
      currentDisplay.splice(idx, idx + 1);
      console.log(currentDisplay);
      calculateResult();
    }
  });
  display.innerText = currentDisplay[0];
}

//Is not setup to calculate multuply and devide first, the rest works... I think
const calculate = document.getElementById("calculate");
calculate.addEventListener("click", () => {
  calculateResult();
});
