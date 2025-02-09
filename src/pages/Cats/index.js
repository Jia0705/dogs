import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getCats function from the utils/api.js file */

function Cats() {
  /* INSTRUCTION: create a state variable called cats and set it to an empty array */

  /* INSTRUCTION: create a state variable called sort and set it to an empty string */

  /* INSTRUCTION: create a state variable called page and set it to 1 */

  /* INSTRUCTION: create a state variable called limit and set it to 5 */

  /* INSTRUCTION: create a useEffect hook that fetches the cats from the back-end server using the getCats function */
 

  return (
    <div>
      <h2>Cats</h2>
      <div className="filters">
        <label htmlFor="sort">Sort by:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to sort the cats by breed or rating */}

        <label htmlFor="limit">Per Page:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to limit the number of cats per page */}
       

      </div>
      {/* INSTRUCTION: create a table that displays the cats. The table should have the following columns: Breed, Coat Length, and Rating. If there are no cats, display a message saying "No cats found." */}
      

      {/* INSTRUCTION: create a pagination controls that allows the user to navigate through the cats */}
      <div className="pagination">
    </div>
    </div>
  );
}

export default Cats;
