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
          nameTitle={detail.name.title}
          fName={detail.name.first}
          lName={detail.name.last}
          imgSrc={detail.picture.medium}
          nationality={detail.nat}
          birthDate={detail.dob.date}
          countryOfBirth={detail.location.country}
          />
      ))}
    </div>
   );
};

export default EmployeeList;