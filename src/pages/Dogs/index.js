import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getDogs function from the utils/api.js file */

function Dogs() {
  /* INSTRUCTION: create a state variable called dogs and set it to an empty array */


  /* INSTRUCTION: create a state variable called size and set it to an empty string */


  /* INSTRUCTION: create a useEffect hook that fetches the dogs from the back-end server using the getDogs function */
  
  return (
    <div>
      <h2>Dogs</h2>

      <div className="filters">
        <label htmlFor="size">Filter by size:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to filter the dogs by size */}
       
      </div>

      {/* INSTRUCTION: create a table that displays the dogs. The table should have the following columns: Breed, Size, Age, and Adoption Fee. If there are no dogs, display a message saying "No dogs found." */}
     
    </div>
  );
}

export default Dogs;
