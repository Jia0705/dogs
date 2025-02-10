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
    const fetchDogs = async () => {
      try {
        const data = await getDogs(size);
        setDogs(data);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    };
    fetchDogs();
  }, [size]);

  return (
    <div>
      <h2>Dogs</h2>

      <div className="filters">
        <label htmlFor="size">Filter by size:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to filter the dogs by size */}
        <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">All</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      {/* INSTRUCTION: create a table that displays the dogs. The table should have the following columns: Breed, Size, Age, and Adoption Fee. If there are no dogs, display a message saying "No dogs found." */}
     
      {dogs.length === 0 ? (
        <p>No dogs found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Breed</th>
              <th>Size</th>
              <th>Age</th>
              <th>Adoption Fee</th>
            </tr>
          </thead>
          <tbody>
            {dogs.map((dog) => (
              <tr key={dog.id}>
                <td>{dog.breed}</td>
                <td>{dog.size}</td>
                <td>{dog.age}</td>
                <td>${dog.adoptionFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dogs;
