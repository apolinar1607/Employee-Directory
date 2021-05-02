import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './components/Employee/EmployeeList';
import EmployeeFilter from './components/Employee/EmployeeFilter';

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredGender, setFilteredGender] = useState('All');
  console.log(filteredGender);
  useEffect(() => employeeSearchHandler(), [])

  const employeeSearchHandler = () => {
    fetch('https://randomuser.me/api/?results=30')
      .then(response => response.json())
      .then(data => {
        console.log(data);
          setEmployeeData(data.results);
      })
  }
  const filterChangeHandler = (selectedGender) => {
    setFilteredGender(selectedGender);
  }

  let filteredEmployee = [];

  if (filteredGender === "Male") {
    filteredEmployee = employeeData.filter(data => {
      return data.gender === "male";
    })
  }
  else if (filteredGender === "Female") {
    filteredEmployee = employeeData.filter(data => {
      return data.gender === "female";
    })
  }
  else {
    filteredEmployee = employeeData;
  }
  
  return (
    <React.Fragment>
      <h2>Employee Directory</h2>
      <EmployeeFilter selected={filteredGender} 
        onChangeFilter={filterChangeHandler}
      />
      <EmployeeList details={filteredEmployee} />
    </React.Fragment>
  );
}

export default App;
