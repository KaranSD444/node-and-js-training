console.log("Human deatils is loading");

function getHUman() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Human details loaded");
    }, 5000);
  });
}

async function displayHUman() {
  const result = await getHUman();
  console.log(result);
}

displayHUman();





async function abcd()
  {
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let res = await post.json();

    console.log(res);
    
  }

  abcd()
//async is used to resolve  callback hell and promises

// displayHuman()
//       |
//       v
// await getHuman()
//       |
//       v
// Promise Created
//       |
//       v
// setTimeout(2000)
//       |
//       v
// 2 Seconds Later
//       |
//       v
// resolve("Human details loaded")
//       |
//       v
// result = "Human details loaded"
//       |
//       v
// console.log(result)
