import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink><br/>
      <NavLink to="/actors">Actors</NavLink><br/>
      <NavLink to="/directors">Directors</NavLink><br/>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
}

export default NavBar;
