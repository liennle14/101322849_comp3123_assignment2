import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
    const[employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
          try {
            const response = await axios.get('/api/employees');
            setEmployees(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchEmployees();
      }, [employees]);

  const handleAddEmployeeClick = () => {
    navigate('/add-employee');
  };

  const handleUpdateEmployeeClick = () => {
    navigate('/update-employee');
  };

  const handleDeleteEmployeeClick = () => {
    navigate('/delete-employee');
  };

  const handleViewEmployeeClick = () => {
    navigate('/view-employee');
  };

    return (
      <div>
        <div className='head'>
        <h1>Employee List</h1>
        </div>
        <button onClick={handleAddEmployeeClick}>Add Employee</button>
        <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button onClick={handleViewEmployeeClick}>View</button>
                  <button onClick={handleUpdateEmployeeClick}>Update</button>
                  <button onClick={handleDeleteEmployeeClick}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      </div>
    );
  }
export default EmployeeList;