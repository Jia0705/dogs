import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getCats function from the utils/api.js file */
import { getCats } from "../../utils/api";

function Cats() {
  /* INSTRUCTION: create a state variable called cats and set it to an empty array */
  const [cats, setCats] = useState([]);
  /* INSTRUCTION: create a state variable called sort and set it to an empty string */
  const [sort, setSort] = useState("");
  /* INSTRUCTION: create a state variable called page and set it to 1 */
  const [page, setPage] = useState(1);
  /* INSTRUCTION: create a state variable called limit and set it to 5 */
  const [limit, setLimit] = useState(5);

  /* INSTRUCTION: create a useEffect hook that fetches the cats from the back-end server using the getCats function */
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await getCats(sort, page, limit);
        setCats(data);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };
    fetchCats();
  }, [sort, page, limit]);

  return (
    <div>
      <h2>Cats</h2>
      <div className="filters">
        <label htmlFor="sort">Sort by:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to sort the cats by breed or rating */}
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">None</option>
          <option value="breed">Breed</option>
          <option value="rating">Rating</option>
        </select>

        <label htmlFor="limit">Per Page:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to limit the number of cats per page */}
        <select
          id="limit"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>

      {/* INSTRUCTION: create a table that displays the cats. The table should have the following columns: Breed, Coat Length, and Rating. If there are no cats, display a message saying "No cats found." */}
    
      {cats.length === 0 ? (
        <p>No cats found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Breed</th>
              <th>Coat Length</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.breed}</td>
                <td>{cat.coatLength}</td>
                <td>{cat.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* INSTRUCTION: create a pagination controls that allows the user to navigate through the cats */}
      <div className="pagination">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Cats;
