const express = require("express");
const app = express();
const employees = require("./employees.json");
const PORT = 8080;
const fs = require("fs");

app.use(express.json());
app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = employees.find((s) => s.id === id);

  if (!data) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.json(data);
});

app.post("/editEmployee", (req, res) => {
  const newEmployee = req.body[0];
  employees.push(newEmployee);

  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing the file" });
      }
    },
  );

  res.status(201).json({
    message: "Employee added successfully",
    employee: newEmployee,
  });
});

app.put("/employee/:id", (req, res) => {
  const id = Number(req.params.id);
  const employeeIndex = employees.findIndex((emp) => emp.id == id);

  if (employeeIndex === -1) {
    return res.status(404).json({
      message: "EMployee not Found",
    });
  }

  employees[employeeIndex] = {
    ...employees[employeeIndex],
    ...req.body,
  };
  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to update employee" });
      }
    },
  );
  res.json({
    message: "Employee updated successfully",
    employee: employees[employeeIndex],
  });
});

app.listen(PORT, () => {
  console.log("Serve is running");
});
