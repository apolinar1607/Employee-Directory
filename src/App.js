import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './components/Employee/EmployeeList';
import EmployeeFilter from './components/Employee/EmployeeFilter';

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredGender, setFilteredGender] = useState('All');
  const [sortLastName, setSortLastName] = useState(false);
  const [sortCountry, setSortCountry] = useState(false);
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
    setSortCountry(false);
    setSortLastName(false);
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

  const sortByLastNameHandler = () => {
    setSortCountry(false);
    setSortLastName(true);
  };

  if (sortLastName) {
    filteredEmployee = filteredEmployee.sort((a, b) => {
      let lastNameA = a.name.last.toUpperCase();
      let lastNameB = b.name.last.toUpperCase();
      if (lastNameA < lastNameB) {
        return -1;
      }
      if (lastNameA > lastNameB) {
        return 1;
      }
      return 0;
    })
  }

  const sortByCountryOfBirthHandler = () => {
    setSortLastName(false);
    setSortCountry(true);
  }

  if (sortCountry) {
    filteredEmployee = filteredEmployee.sort((a, b) =>{
          let countryA = a.location.country.toUpperCase();
          let countryB = b.location.country.toUpperCase();
          if (countryA < countryB) {
            return -1;
          }
          if (countryA > countryB) {
            return 1;
          }
          return 0;
    
        })
  }

  
  
  return (
    <React.Fragment>
      <h2>Employee Directory</h2>
      <EmployeeFilter selected={filteredGender} 
        onChangeFilter={filterChangeHandler}
        onSortByLastName={sortByLastNameHandler}
        onSortByCountry ={sortByCountryOfBirthHandler}
      />
      <EmployeeList details={filteredEmployee} />
    </React.Fragment>
  );
}

export default App;
