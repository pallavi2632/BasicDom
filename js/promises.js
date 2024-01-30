//------------------------ with promises----------------------

const result = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    error;
  });
console.log(result)

//------------------------ without promises----------------------
// async function getData() {
//   let resusltFromServer = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(await resusltFromServer.json());
// }
// getData();

// let resusltFromServer= fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(resusltFromServer)
