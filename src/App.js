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

  async function employeeSearchHandler() {
    const response = await fetch('https://randomuser.me/api/?results=30');
    const data = await response.json();
      const transformedData = data.results.map(data => {
        return {
          nameTitle: data.name.title,
          fName: data.name.first,
          lName: data.name.last,
          imgSrc: data.picture.large,
          nationality: data.nat,
          birthDate: data.dob.date,
          countryOfBirth: data.location.country,
          email: data.email,
          mobileNumber: data.cell,
          gender: data.gender,
        }
      })
      console.log(data);
      setEmployeeData(transformedData);
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
      let lastNameA = a.lName.toUpperCase();
      let lastNameB = b.lName.toUpperCase();
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
          let countryA = a.countryOfBirth.toUpperCase();
          let countryB = b.countryOfBirth.toUpperCase();
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
