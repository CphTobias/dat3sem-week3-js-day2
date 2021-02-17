var cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 },
];

function createTable(cars) {
  function createFromArray() {
    let tableRows = "";
    cars.map(
      item =>
        (tableRows =
          tableRows +
          `<tr>
    <th scope="row">${item.id}</th>
    <td>${item.year}</td>
    <td>${item.make}</td>
    <td>${item.model}</td>
    <td>${item.price}</td>
  </tr>`)
    );

    return `<table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Year</th>
        <th scope="col">Make</th>
        <th scope="col">Model</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>${tableRows}</tbody>
  </table>`;
  }

  const table = createFromArray();
  const root = document.getElementById("root");
  root.innerHTML = table;
}

createTable(cars);

const price = document.getElementById("price");
const formSubmit = document.getElementById("priceChange");

formSubmit.addEventListener("submit", e => {
  e.preventDefault();
  const newCars = cars.filter(car => car.price < price.value);
  createTable(newCars);
  document.getElementById("price").value = "";
});
