const root = document.getElementById("root");

let people = ["Lars", "Per", "Jens", "Jon"];

function createListItems(array) {
  return array.map(item => `<li>${item}</li>`).join("");
}

function addLi(array) {
  const li = createListItems(array);
  root.innerHTML = `<ul>${li}</ul>`;
}
addLi(people);

const form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  people = [...people, name];
  addLi(people);
  document.getElementById("name").value = "";
});

const removeFirst = document.getElementById("r-first");
removeFirst.addEventListener("click", () => {
  people.shift();
  addLi(people);
});

const removeLast = document.getElementById("r-last");
removeLast.addEventListener("click", () => {
  people.pop();
  addLi(people);
});
