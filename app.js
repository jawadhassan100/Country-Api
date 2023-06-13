// const response = fetch("./localDB.json");
// const data = response.json();
// console.log(data);

// import { get } from "axios/dist/browser/axios.cjs";
// browse
// fetch("https://dummyjson.com/todos/12")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Fething Error " + error));

async function getData() {
  const response = await fetch("./localDB.json");
  const data = await response.json();
  console.log(data);
}
getData();
