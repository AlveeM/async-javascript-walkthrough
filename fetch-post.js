const FETCH_URL = "https://jsonplaceholder.typicode.com/posts/";

const article = {
  title: "Fun article",
  body: "This is my first POST request",
  userId: 1
}

const configObj = {
  method: "POST",
  body: JSON.stringify(article),
  headers: {
    'Content-type': 'application/json',
  }
}

fetch(FETCH_URL, configObj)
  .then(res => res.json())
  .then(data => console.log(data));

// const article2 = {
//   title: "Fun article 2",
//   body: "This is my first POST request",
//   userId: 1
// }

// const configObj2 = {
//   method: "POST",
//   body: JSON.stringify(article2),
//   headers: {
//     'Content-type': 'application/json',
//   }
// }

// fetch(FETCH_URL, configObj2)
//   .then(res => res.json())
//   .then(data => console.log(data));