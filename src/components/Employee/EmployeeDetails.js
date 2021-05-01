import React from 'react';
import classes from './EmployeeDetails.module.css';

const EmployeeDetails = (props) => {
  return (
    <div className={classes.info}>
      <p><strong>Full Name: </strong>{props.fullName}</p>
      <p><strong>Date of Birth: </strong>{props.birthDate}</p>
      <p><strong>Country of Birth: </strong>{props.countryOfBirth}</p>
    </div>
  )
}

export default EmployeeDetails;