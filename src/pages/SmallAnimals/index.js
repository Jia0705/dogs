import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getSmallAnimals function from the utils/api.js file */
import { getSmallAnimals } from "../../utils/api";
function SmallAnimals() {
  /* INSTRUCTION: create a state variable called smallAnimals and set it to an empty array */
  const [smallAnimals, setSmallAnimals] = useState([]);
  /* INSTRUCTION: create a state variable called search and set it to an empty string */
  const [search, setSearch] = useState("");
  /* INSTRUCTION: create a useEffect hook that fetches the small animals from the back-end server using the getSmallAnimals function */
  useEffect(() => {
    getSmallAnimals()
      .then(function (data) {
        setSmallAnimals(data);
      })
      .catch(function (error) {
        console.log("Error :", error);
      });
  }, []);
  /* INSTRUCTION: create a function called handleSearchChange that updates the search state variable */
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <h2>Small Animals</h2>

      <div className="search-form">
        <label htmlFor="search">Search (by name or animal type):</label>
        {/* INSTRUCTION: create an input field that allows the user to search for small animals by name or animal type */}
        <input
          type="text"
          value={search}
          placeholder="e.g.rabbit"
          onChange={handleSearchChange}
        />
      </div>

      {/* INSTRUCTION: create a table that displays the small animals. The table should have the following columns: Name, Animal Type, Age, and Gender. If there are no small animals, display a message saying "No small animals found." */}
      <div className="table">
        {smallAnimals.length > 0 ? (
          smallAnimals.map((smallAnimal) => (
            <div key={smallAnimal.id} >
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Animal Type</td>
                  <td>Age</td>
                  <td>Gender</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{smallAnimal.name}</td>
                  <td>{smallAnimal.animalType}</td>
                  <td>{smallAnimal.age}</td>
                  <td>{smallAnimal.gender}</td>
                </tr>
              </tbody>
            </div>
          ))
        ) : (
          <p>No small animal found</p>
        )}
      </div>
   </div>
  );
}

export default SmallAnimals;
