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
    const fetchSmallAnimals = async () => {
      try {
        const data = await getSmallAnimals(search);
        setSmallAnimals(data);
      } catch (error) {
        console.error("Error fetching small animals:", error);
      }
    };
    fetchSmallAnimals();
  }, [search]);

  /* INSTRUCTION: create a function called handleSearchChange that updates the search state variable */
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Small Animals</h2>

      <div className="search-form">
        <label htmlFor="search">Search (by name or animal type):</label>
        {/* INSTRUCTION: create an input field that allows the user to search for small animals by name or animal type */}
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by name or type..."
        />
      </div>

      {/* INSTRUCTION: create a table that displays the small animals. The table should have the following columns: Name, Animal Type, Age, and Gender. If there are no small animals, display a message saying "No small animals found." */}
      {smallAnimals.length === 0 ? (
        <p>No small animals found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Animal Type</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {smallAnimals.map((animal, index) => (
              <tr key={index}>
                <td>{animal.name}</td>
                <td>{animal.animalType}</td>
                <td>{animal.age}</td>
                <td>{animal.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SmallAnimals;
