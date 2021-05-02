import React from 'react';

import classes from './EmployeeFilter.module.css';

const EmployeeFilter = (props) => {
  const filterChangeHandler = (event) => {
    console.log('Change event was triggered!')
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className={classes.filter}>
      <div className={classes.control}>
        <label>Filter By Gender</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>
  )
}

export default EmployeeFilter;