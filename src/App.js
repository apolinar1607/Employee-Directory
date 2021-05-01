import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/Employee/EmployeeList';

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const employeeSearchHandler = () => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => {
        console.log(data);
          setEmployeeData(data.results);
      })
  }
  return (
    <React.Fragment>
      <h2>Employee Directory</h2>
      <div className="search">
        <button onClick={employeeSearchHandler}>Employee Search</button>
      </div>
      <EmployeeList details={employeeData} />
    </React.Fragment>
  );
}

export default App;
