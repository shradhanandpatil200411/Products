import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Navbar() {
  const { userData } = useSelector((state) => state.user);

  return (
    <>
      <nav className='bg-dark text-white w-screen font-thin flex justify-between gap-5 px-10 py-5 border-b border-light items-center'>
        <div className='flex justify-evenly w-[40%]'>
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
        </div>
        <div className='w-[40%]'>
          <input
            type='text'
            className='border-extra-light outline-none border w-full px-2 py-1 rounded'
            placeholder='Search'
          />
        </div>
        <div>
          {userData && (
            <NavLink className='flex items-center'>
              <h1 className='mx-2 '>{userData.username}</h1>
              <img className='w-10 rounded-full border' src='/' alt='profile' />
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
