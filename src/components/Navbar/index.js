import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {/* INSTRUCTION: create a list of links that allows the user to navigate to the Dogs, Cats, and SmallAnimals pages */}
        <li LinkComponent={Link} to="/">
          Home
        </li>
        <li LinkComponent={Link} to="/dogs">
          Dogs
        </li>
        <li LinkComponent={Link} to="/cats">
          Cats
        </li>
        <li LinkComponent={Link} to="/small-animals">
          Small Animals
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
