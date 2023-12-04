const express = require("express");
const mongoose = require("mongoose");
const empRoutes = require('./routes/empRoutes');

const app = express();

mongoose.connect("mongodb://localhost:27017/employees");

app.use(express.json());
app.use('/api/v1/employees', empRoutes);

app.get("/api/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.post('/api/employees', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const newEmployee = new Employee({ firstName, lastName, email });
    await newEmployee.save();
    res.send(newEmployee)
    res.status(201).json({ success: true, message: 'Employee added successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to add employee' });
  }
});


app.listen(3002, () => {
    mongoose.connection.on("open", () => {
        console.log("MongoDB connected");
    });
  console.log("Server running at http://localhost:3002/")
});