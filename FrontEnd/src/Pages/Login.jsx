import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

function Login() {
  const [signUp, setSignUp] = useState(true);
  const { register, reset, handleSubmit } = useForm();
  const submitHandler = (user) => {
    console.log(user);
    reset();
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={`w-7/12 h-[70vh] mx-auto mt-10 ${
          signUp ? "flex-row-reverse" : ""
        } rounded-2xl overflow-hidden flex bg-white shadow-medium shadow-2xl`}>
        <div
          id='left'
          className='w-1/2 flex flex-col justify-center bg-white text-black'>
          <h1 className='text-4xl text-dark font-bold m-auto w-fit my-5'>
            {signUp ? "Create Account" : "Sign In"}
          </h1>

          <div className='px-5'>
            {signUp ? (
              <>
                <div className='relative '>
                  <label
                    className='absolute -top-5 text-light font-thin'
                    htmlFor='fullname'>
                    Fullname
                  </label>
                  <input
                    {...register("fullname")}
                    type='text'
                    className='border-1 border-light w-full rounded outline-light my-1 py-1 px-2 '
                    name='fullname'
                    id='fullname'
                  />
                </div>
                <div className='relative my-5'>
                  <label
                    className='absolute -top-5 text-light font-thin'
                    htmlFor='username'>
                    Username
                  </label>
                  <input
                    {...register("username")}
                    type='text'
                    className='border-1 border-light w-full rounded outline-light my-1 py-1 px-2 '
                    name='username'
                    id='username'
                  />
                </div>
                <div className='relative my-5'>
                  <label
                    className='absolute -top-5 text-light font-thin'
                    htmlFor='password'>
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type='password'
                    className='border-1 border-light w-full rounded outline-light my-1 py-1 px-2 '
                    name='password'
                    id='password'
                  />
                </div>
              </>
            ) : (
              <>
                <div className='relative my-5'>
                  <label
                    className='absolute -top-5 text-light font-thin'
                    htmlFor='username'>
                    Username
                  </label>
                  <input
                    {...register("username")}
                    type='text'
                    className='border-1 border-light w-full rounded outline-light my-1 py-1 px-2 '
                    name='username'
                    id='username'
                  />
                </div>
                <div className='relative my-5'>
                  <label
                    className='absolute -top-5 text-light font-thin'
                    htmlFor='password'>
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type='password'
                    className='border-1 border-light w-full rounded outline-light my-1 py-1 px-2 '
                    name='password'
                    id='password'
                  />
                </div>
              </>
            )}

            <div className='mx-auto w-fit my-5 '>
              {signUp ? (
                <button
                  onClick={handleSignUp}
                  className='px-4 w-44 py-2 bg-medium text-white rounded font-semibold cursor-pointer hover:bg-light duration-500 '>
                  Sign Up
                </button>
              ) : (
                <button className='px-4 w-44 py-2 bg-medium text-white rounded font-semibold cursor-pointer hover:bg-light duration-500 '>
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
        <div className='bg-white w-1/2'>
          <div
            id='right'
            className={`${
              signUp ? "bg-linear-to-tr" : "bg-linear-to-tl"
            } from-light to-dark h-[100%] ${
              signUp ? "rounded-r-[30%]" : "rounded-l-[30%]"
            } flex flex-col justify-center px-5 text-center`}>
            <h1 className='text-4xl font-bold my-4 tracking-wide'>
              {signUp ? "Hello, Friend!" : "Welcome, Back!"}
            </h1>
            <p className='text-lg font-thin'>
              Register with your details to use all of side fetchers
            </p>
            <div className='my-4 '>
              <button
                className='px-4 w-36 py-2 border-white border-1 text-white rounded font-semibold cursor-pointer hover:bg-light duration-500'
                type='button'
                onClick={() => setSignUp(!signUp)}>
                {signUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
