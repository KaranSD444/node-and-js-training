const express = require("express");
// const std = require("./students.json");
const app = express();
const PORT = 8080;

app.use(express.json()); // middelware

app.get("/students", (req, res) => {
  res.status(200).send({
    Name: "SD Karan",
    USN:"1CD22CS124",
    Age: "22",
    Department: "CSE",
  });
});

app.post("/students/:USN", (req, res) => {
  const { USN } = req.params;
  const { Name, Address } = req.body;

  if (!Name) {
    res.status(418).send({ message: "we need a Name!" });
  }

  res.send({
    Student: `${Name} with USN ${USN} lives at  ${Address}`,
  });
});

app.listen(PORT, () => {
  console.log(`its alive on http://localhost:${PORT}`);
});
