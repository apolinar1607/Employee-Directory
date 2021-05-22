import React from 'react';
import classes from './Employee.module.css';
import EmployeeDetails from './EmployeeDetails';

const Employee = (props) => {
  const dt = new Date(props.birthDate);
  const mth = dt.toLocaleString('en-AU', {month: "long"});
  const yr = dt.getFullYear();
  const dy = dt.getDate();
  return (
    <div className={classes.details}>
      <img src={props.imgSrc} alt={props.fName}></img>
      <EmployeeDetails
        fullName={`${props.nameTitle} ${props.fName} ${props.lName}`}
        birthDate={`${dy} ${mth} ${yr}`}
        countryOfBirth={props.countryOfBirth}
        mobileNumber={props.mobileNumber}
        email={props.email}
        />
    </div>
  );
};

export default Employee;