import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = async () => {
    try {
      await axios.post('/api/employees', employee); // Send POST request to add employee
      navigate('/view-employee');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', employee);
    setEmployee({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

    return (
      <div className='addEmp'>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>
          <button className='add' onClick={handleAddEmployee}>Add Employee</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }


export default AddEmployee;

