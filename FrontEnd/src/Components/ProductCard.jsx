import React from "react";
import { NavLink } from "react-router";

function ProductCard({ name, imageUrl, dec, price, id }) {
  return (
    <NavLink to={`/admin/product-details/${id}`} className='w-[30%]'>
      <div className='border rounded-2xl flex flex-col w-full h-[80%] p-5 cursor-pointer'>
        <div className='w-full h-[60%]'>
          <img className='w-full h-full' src={imageUrl} alt='product-img' />
        </div>
        <div className='my-2 leading-10'>
          <h1 className='text-2xl font-bold'>{name?.slice(0, 20)}...</h1>
          <p className='text-sm font-thin my-2'>
            {dec?.slice(0, 100)}...
            <small className='text-extra-light'>more</small>
          </p>
          <div className='flex gap-3 justify-between mt-2'>
            <p className='font-bold text-extra-light'> ₹{price}</p>
            <button
              className='cursor-pointer px-4 py- bg-light font-semibold rounded'
              type='button'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductCard;
