let humanpromise = new Promise((resolve, reject) => {
  let healthy = true;

  if (healthy) {
    resolve("Pateint is healthy");
  } else {
    reject("Failure");
  }
});

humanpromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally Method"));
