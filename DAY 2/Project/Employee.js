const express = require("express");
const fs = require("fs");

const app = express();
const employees = require("./employees.json");

const PORT = 8080;

app.use(express.json());

/* ===========================
   GET ALL EMPLOYEES
=========================== */
app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

/* ===========================
   GET TOTAL EMPLOYEES
=========================== */
app.get("/employees/count", (req, res) => {
  res.json({
    totalEmployees: employees.length,
  });
});

/* ===========================
   SEARCH EMPLOYEE
=========================== */
app.get("/employees/search", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({
      message: "Please provide name in query",
    });
  }

  const result = employees.filter((emp) =>
    emp.name.toLowerCase().includes(name.toLowerCase())
  );

  if (result.length === 0) {
    return res.status(404).json({
      message: "No employee found",
    });
  }

  res.json(result);
});

/* ===========================
   GET EMPLOYEE BY ID
=========================== */
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  res.json(employee);
});

/* ===========================
   ADD EMPLOYEE
=========================== */
app.post("/employees", (req, res) => {
  const newEmployee = req.body;

  employees.push(newEmployee);

  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to add employee",
        });
      }

      res.status(201).json({
        message: "Employee added successfully",
        employee: newEmployee,
      });
    }
  );
});

/* ===========================
   UPDATE ENTIRE EMPLOYEE
=========================== */
app.put("/employee/:id", (req, res) => {
  const id = Number(req.params.id);

  const employeeIndex = employees.findIndex((emp) => emp.id === id);

  if (employeeIndex === -1) {
    return res.status(404).json({
      message: "Employee not found",
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
        return res.status(500).json({
          message: "Failed to update employee",
        });
      }

      res.json({
        message: "Employee updated successfully",
        employee: employees[employeeIndex],
      });
    }
  );
});

/* ===========================
   UPDATE DESIGNATION
=========================== */
app.put("/employee/:id/designation", (req, res) => {
  const id = Number(req.params.id);

  const { designation } = req.body;

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  employee.designation = designation;

  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to update designation",
        });
      }

      res.json({
        message: "Designation updated successfully",
        employee,
      });
    }
  );
});

/* ===========================
   UPDATE AGE
=========================== */
app.put("/employee/:id/age", (req, res) => {
  const id = Number(req.params.id);

  const { age } = req.body;

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  employee.age = age;

  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to update age",
        });
      }

      res.json({
        message: "Age updated successfully",
        employee,
      });
    }
  );
});

/* ===========================
   UPDATE SALARY
=========================== */
app.put("/employee/:id/salary", (req, res) => {
  const id = Number(req.params.id);

  const { salary } = req.body;

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  employee.salary = salary;

  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to update salary",
        });
      }

      res.json({
        message: "Salary updated successfully",
        employee,
      });
    }
  );
});

/* ===========================
   DELETE EMPLOYEE
=========================== */
app.delete("/employee/:id", (req, res) => {
  const id = Number(req.params.id);

  const employeeIndex = employees.findIndex((emp) => emp.id === id);

  if (employeeIndex === -1) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  const deletedEmployee = employees.splice(employeeIndex, 1);

  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to delete employee",
        });
      }

      res.json({
        message: "Employee deleted successfully",
        employee: deletedEmployee[0],
      });
    }
  );
});

/* ===========================
   DELETE ALL EMPLOYEES
=========================== */
app.delete("/employees", (req, res) => {
  employees.length = 0;

  fs.writeFile(
    "./employees.json",
    JSON.stringify(employees, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to delete employees",
        });
      }

      res.json({
        message: "All employees deleted successfully",
      });
    }
  );
});

/* ===========================
   START SERVER
=========================== */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});