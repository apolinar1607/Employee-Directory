import React from 'react';
import classes from './NewSearch.module.css';

const NewSearch = () => {

  // search button handler
const newSearchHandler = () => {
  console.log('New Search Handler is triggered!');
  fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => console.log(data));
}
  return (
    <div className={classes.search}>
        <button onClick={newSearchHandler}>Search</button>
    </div>
  )
}

export default NewSearch;