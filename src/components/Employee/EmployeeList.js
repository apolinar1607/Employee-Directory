import React from 'react';
//import Card from '../UI/Card/Card';
import classes from './EmployeeList.module.css';
import Employee from './Employee';


const EmployeeList = (props) => {
  console.log(props);
   return (
    <div className={classes.employee}>
      {props.details.map((detail) => (
        <Employee 
          key={Math.random().toString()}
          nameTitle={detail.nameTitle}
          fName={detail.fName}
          lName={detail.lName}
          imgSrc={detail.imgSrc}
          nationality={detail.nationality}
          birthDate={detail.birthDate}
          countryOfBirth={detail.countryOfBirth}
          email={detail.email}
          mobileNumber={detail.mobileNumber}
          />
      ))}
    </div>
   );
};

export default EmployeeList;