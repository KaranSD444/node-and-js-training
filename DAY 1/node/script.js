const fs = require("fs");

fs.writeFile("hey.txt", "How are you?", (err) => {
  if (err) console.error(err);
  else console.log("done");
});

fs.appendFile("hey.txt", "My name is karan", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

fs.rename("hey.txt", "rename.txt", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

fs.copyFile("rename.txt", "./copy.txt", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

fs.unlink("hey.txt", (err) => {
  if (err) console.error(err.messsage);
  else console.log("Done");
});
