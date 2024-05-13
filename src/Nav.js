import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  return (
    <nav>
      <NavLink exact to="/dogs">
        Home
      </NavLink>

      {dogs.map((dog) => (
        <NavLink
          classname="boxes"
          key={dog.name}
          to={`/dogs/${dog.name.toLowerCase()}`}
        >
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
