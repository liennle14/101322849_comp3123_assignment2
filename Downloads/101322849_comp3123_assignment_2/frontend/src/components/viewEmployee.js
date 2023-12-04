import React, { Component } from 'react';

const ViewEmployee = function(props){
  const { employeeData } = props.location.state || {};

  return (
    <div className='view'>
      <h2>View Employee Details</h2>
      <div>
        <p>First Name: {employeeData.firstName}</p>
        <p>Last Name: {employeeData.lastName}</p>
        <p>Email: {employeeData.email}</p>
      </div>
        <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  );
};

export default ViewEmployee;