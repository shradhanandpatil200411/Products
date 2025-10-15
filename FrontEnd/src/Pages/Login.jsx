import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = () => {
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col w-fit border-pink-400 border-1 rounded-xl p-5  mx-auto mt-20'>
        <input
          className='outline-0 border-b-1 mb-2'
          type='text'
          placeholder='Username'
          {...register("username", { required: "Invalid username & Password" })}
        />
        {errors.username && (
          <span className='text-red-400'>{errors.username.message}</span>
        )}
        <input
          className='outline-0 border-b-1 mt-2'
          type='password'
          placeholder='Password'
          {...register("password", {
            required: "Invalid username & Password",
            minLength: 8,
          })}
        />
        {errors.username && (
          <span className='text-red-400'>{errors.username.message}</span>
        )}
        <button className='my-4 px-3 py-2 bg-pink-600 text-sm cursor-pointer rounded font-thin'>
          Login
        </button>
        <p className='font-thin text-pink-700'>
          I do not have the account{" "}
          <NavLink className='text-blue-400' to='/register'>
            Register
          </NavLink>
        </p>
      </form>
    </>
  );
}

export default Login;
