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
    getCats(sort, page).then((data) => {
      setCats(data);
    });
  }, [sort, page]);

  return (
    <div>
      <h2>Cats</h2>
      <div className="filters">
        <label htmlFor="sort">Sort by:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to sort the cats by breed or rating */}
        <select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="sort"
            onChange={(event) => {
              setSort(event.target.value);
              // reset the page back to page 1
              setPage(1);
            }}
          >
            <div value="">None</div>
            {cats.map((cat) => {
              return <div value={cat}>{sort}</div>;
            })}
          </select>

        <label htmlFor="limit">Per Page:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to limit the number of cats per page */}
        <select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={limit}
            label="limit"
            onChange={(event) => {
              setLimit(event.target.value);
              setLimit(5);
            }}
          >
            <div value="">5</div>
            {cats.map((cat) => {
              return <div value={cat}>{limit}</div>;
            })}
          </select>

      </div>
      {/* INSTRUCTION: create a table that displays the cats. The table should have the following columns: Breed, Coat Length, and Rating. If there are no cats, display a message saying "No cats found." */}
      <div className="table">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <div key={cat.id} >
              <thead>
                <tr>
                  <td>Breed</td>
                  <td>Coat Length</td>
                  <td>Rating</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cat.breed}</td>
                  <td>{cat.coatLength}</td>
                  <td>{cat.rating}</td>
                </tr>
              </tbody>
            </div>
          ))
        ) : (
          <p>No cats found</p>
        )}
      </div>

      {/* INSTRUCTION: create a pagination controls that allows the user to navigate through the cats */}
      <div className="pagination">
        <div
          className="button"
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </div>
        <span>Page {page}</span>
        <div
          className="button"
          disabled={limit.length === 5? true : false}
          onClick={() => setLimit(limit + 1)}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default Cats;
