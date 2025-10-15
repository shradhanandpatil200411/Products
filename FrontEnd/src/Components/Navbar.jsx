import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className='bg-gray-900 text-white w-screen font-thin flex justify-center gap-5 px-10 py-5 '>
        <NavLink className={(e) => (e.isActive ? "text-pink-400" : "")} to='/'>
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-pink-400" : "")}
          to='/produces'>
          Produces
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-pink-400" : "")}
          to='/login'>
          Login
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
