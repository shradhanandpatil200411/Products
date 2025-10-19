import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { asyncLogOut } from "../Store/Actions/userAction";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Navbar() {
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {}, [userData]);

  const handelLogOut = () => {
    dispatch(asyncLogOut());
    toast.success("User LogOut");
  };

  return (
    <>
      <nav className='bg-dark shrink-0 text-white font-thin flex justify-between gap-5 px-10 py-5 backdrop-blur-2xl items-center'>
        <div className='flex justify-evenly w-[40%]'>
          <NavLink
            className={(e) => (e.isActive ? "text-extra-light" : "")}
            to='/'>
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-extra-light" : "")}
            to='/products'>
            Products
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-extra-light" : "")}
            to='/createProduce'>
            Create Products
          </NavLink>

          {userData.length > 0 ? (
            <NavLink
              className={(e) => (e.isActive ? "text-extra-light" : "")}
              onClick={handelLogOut}
              to='/logIn'>
              Log Out
            </NavLink>
          ) : (
            <NavLink
              className={(e) => (e.isActive ? "text-extra-light" : "")}
              to='/login'>
              LogIn
            </NavLink>
          )}
        </div>

        <div className='w-[40%]'>
          <input
            type='text'
            className='border-extra-light outline-none border w-full px-2 py-1 rounded'
            placeholder='Search'
          />
        </div>

        <div>
          {userData.length > 0 && (
            <NavLink className='flex  items-center'>
              <h1 className='mx-2 '>{userData[0]?.username}</h1>
              <img
                className='w-10 rounded-full border'
                src='../../public/Img/user.png'
                alt='profile'
              />
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
