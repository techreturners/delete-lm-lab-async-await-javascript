import fetch from "node-fetch";

const jsonTypicode: string = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint: string) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);
