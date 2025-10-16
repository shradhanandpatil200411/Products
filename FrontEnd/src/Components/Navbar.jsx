import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className='bg-dark text-white w-screen font-thin flex justify-center gap-5 px-10 py-5 '>
        <NavLink
          className={(e) => (e.isActive ? "text-extra-light" : "")}
          to='/'>
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-extra-light" : "")}
          to='/produces'>
          Produces
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-extra-light" : "")}
          to='/login'>
          Login
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
