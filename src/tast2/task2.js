const first = document.getElementById("first");
const second = document.getElementById("second");

function handleClick(idName) {
  console.log(`Hi from ${idName}`);
}

first.addEventListener("click", () => handleClick(first.id));
second.addEventListener("click", () => handleClick(second.id));

// Implement code to write to the console:
// The value of id pointed to by the target property (which you get from the event argument)
// Hint: function (e) { var target = e.target}
// Make SURE you understand what happened here

const outer = document.getElementById("outer");
const paragraph = document.getElementById("text");
outer.addEventListener("click", e => {
  const div = e.target;
  paragraph.appendChild(div);
});
