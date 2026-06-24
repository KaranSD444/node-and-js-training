
console.log("Human deatils is loading");


function getHUman() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Human details loaded");
    }, 5000);
  });
}


async function displayHUman(){
    const result  =await getHUman();
    console.log(result);
    
}

displayHUman();


//async is used to resolve  callback hell and promises