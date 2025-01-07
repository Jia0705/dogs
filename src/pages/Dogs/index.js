import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getDogs function from the utils/api.js file */
import { getDogs } from "../../utils/api";

function Dogs() {
  /* INSTRUCTION: create a state variable called dogs and set it to an empty array */
  const [dogs, setDogs] = useState([]);

  /* INSTRUCTION: create a state variable called size and set it to an empty string */
  const [size, setSize] = useState("");

  /* INSTRUCTION: create a useEffect hook that fetches the dogs from the back-end server using the getDogs function */
  useEffect(() => {
    getDogs()
      .then(function (data) {
        setDogs(data);
      })
      .catch(function (error) {
        console.log("Error :", error);
      });
  }, []);

  return (
    <div>
      <h2>Dogs</h2>

      <div className="filters">
        <label htmlFor="size">Filter by size:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to filter the dogs by size */}
        <select>
                <option value="all">All</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
      </div>

      {/* INSTRUCTION: create a table that displays the dogs. The table should have the following columns: Breed, Size, Age, and Adoption Fee. If there are no dogs, display a message saying "No dogs found." */}
      <div className="table">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <div key={dog.id} >
              <thead>
                <tr>
                  <td>Breed</td>
                  <td>Size</td>
                  <td>Age</td>
                  <td>Adoption Fee</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dog.breed}</td>
                  <td>{dog.size}</td>
                  <td>{dog.age}</td>
                  <td>{dog.adoptionFee}</td>
                </tr>
              </tbody>
            </div>
          ))
        ) : (
          <p>No dogs found</p>
        )}
      </div>
    </div>
  );
}

export default Dogs;
