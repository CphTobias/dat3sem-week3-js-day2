// Take this as a small, very first “getting started” tutorial, on how to use the fetch-API to fetch data
// Enter this URL in a browser and observe the result:  https://jsonplaceholder.typicode.com/users/1
// What is it, you get back?
// A JSON response.

//1)
const infoOne = document.getElementById("info1");
const infoTwo = document.getElementById("info2");

function getFirst(data) {
  return `<p>Name: ${data.name}</p><p>Phone: ${data.phone}</p>`;
}

function getSecond({ address }) {
  return `
  <p><strong>Address</strong></p>
  <p>Street: ${address.street}</p>
  <p>City: ${address.city}</p>
  <p>Zip: ${address.zipcode}</p>
  <p>Geo (lat, lng): ${address.geo.lat}, ${address.geo.lng}</p>
  `;
}

async function fetchOne(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    infoOne.innerHTML = getFirst(data);
    infoTwo.innerHTML = getSecond(data);
  } catch (err) {
    console.error(err);
  }
}

const getOne = document.getElementById("getOne");
const amountOfUsers = document.getElementById("amount");
getOne.addEventListener("click", () => {
  fetchOne(`https://jsonplaceholder.typicode.com/users/${amountOfUsers.value}`);
});

// 2)
function getAllUsers(data) {
  const listRows = data
    .map(
      user =>
        `<tr>
      <td>${user.name}</td>
      <td>${user.phone}</td>
      </tr>`
    )
    .join("");
  return `<table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
    <tbody>${listRows}</tbody>
  </table>`;
}

const allInfoDiv = document.getElementById("allInfo");
async function fetchAll(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    allInfoDiv.innerHTML = getAllUsers(data);
  } catch (err) {
    console.error(err);
  }
}

const getAll = document.getElementById("getAll");
getAll.addEventListener("click", () => {
  fetchAll(`https://jsonplaceholder.typicode.com/users`);
});
