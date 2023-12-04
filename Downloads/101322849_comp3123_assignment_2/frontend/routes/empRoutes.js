const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Employee = require('../backend/models/Employee');

router.get('/', async (req, res) => {
    const { username, password } = req.body;
  
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
});

router.post('/', async (req, res) => {
    const { firstName, lastName, email } = req.body;

    try {
        const existingEmployee = await Employee.findOne({ email: email });

        if (existingEmployee) {
            return res.status(400).send("Email already exists in the Employee collection");
        } 
        else {
            const newEmployee = new Employee({ _id: new mongoose.Types.ObjectId(), firstName, lastName, email });
            await newEmployee.save();
            return res.status(201).send("New employee created successfully");
        } 
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

router.get('/:eid', async (req, res) => {
    const { username, password } = req.body;
    const { eid } = req.params;
  
    try {
        const employee = await Employee.findOne({ _id : eid });
        if (employee) {
          res.status(200).json(employee);
        } else {
          res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:eid', async (req, res) => {
    const { username, password } = req.body;
    const { eid } = req.params;
    const { firstName, lastName, email } = req.body;
  
    try {
        const updatedEmployee = await Employee.findOneAndUpdate({ _id : eid }, {firstName, lastName, email }, {new: true});
        if (updatedEmployee) {
          res.status(200).json(Employee);
        } else {
          res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/', async (req, res) => {
    const { username, password } = req.body;
    const { eid } = req.query.eid
  
    try {
        const deletedEmployee = await Employee.findOneAndDelete({ _id : eid });
        if (deletedEmployee) {
          res.status(204).json("Employee deleted successfully");
        } else {
          res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;