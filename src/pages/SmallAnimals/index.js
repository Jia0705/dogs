import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getSmallAnimals function from the utils/api.js file */

function SmallAnimals() {
  /* INSTRUCTION: create a state variable called smallAnimals and set it to an empty array */

  /* INSTRUCTION: create a state variable called search and set it to an empty string */

  /* INSTRUCTION: create a useEffect hook that fetches the small animals from the back-end server using the getSmallAnimals function */

  /* INSTRUCTION: create a function called handleSearchChange that updates the search state variable */

  return (
    <div>
      <h2>Small Animals</h2>

      <div className="search-form">
        <label htmlFor="search">Search (by name or animal type):</label>
        {/* INSTRUCTION: create an input field that allows the user to search for small animals by name or animal type */}
   
      </div>

      {/* INSTRUCTION: create a table that displays the small animals. The table should have the following columns: Name, Animal Type, Age, and Gender. If there are no small animals, display a message saying "No small animals found." */}
    
   </div>
  );
}

export default SmallAnimals;
