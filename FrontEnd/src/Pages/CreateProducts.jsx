import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../Store/Actions/productAction";
import { useNavigate } from "react-router";

function CreateProducts() {
  const [name, setName] = useState("Product Name");
  const [imageUrl, setImageUrl] = useState("../../public/Img/product.png");
  const [dec, setDec] = useState("Product Description");
  const [price, setPrice] = useState("Price");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const productData = { name, imageUrl, dec, price };
    productData.id = nanoid();
    dispatch(asyncCreateProduct(productData));
    navigate("/products");
  };
  return (
    <>
      <div className='flex justify-around   mx-auto rounded-xl px-5 py-10  bg-gray-900 shadow-light shadow-2xl w-8/12 mt-10'>
        <div className='border rounded-2xl flex flex-col w-5/12 h-10/12 p-5 cursor-pointer'>
          <div className=''>
            <img className='w-full' src={imageUrl} alt='product-img' />
          </div>
          <div className='my-2 leading-10'>
            <h1 className='text-2xl font-bold'>{name.slice(0, 20)}...</h1>
            <p className='text-sm font-thin my-2'>
              {dec.slice(0, 100)}...
              <small className='text-extra-light'>more</small>
            </p>
            <div className='flex gap-3 justify-between mt-2'>
              <p className='font-bold text-extra-light'> Rs {price}</p>
              <button
                className='cursor-pointer px-4 py- bg-light font-semibold rounded'
                type='button'>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className='w-6/12  p-5'>
          <h1 className='font-bold text-3xl text-light mx-auto w-fit'>
            Product Details{" "}
          </h1>
          <form className='w-11/12 mt-20' onSubmit={submitHandler}>
            <div className='relative '>
              <label
                className='absolute -top-5 text-extra-light font-thin'
                htmlFor='product-name'>
                Product Name
              </label>
              <input
                type='text'
                className='border-1 border-light w-full rounded outline-none my-1 py-1 px-2 '
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='product-name'
                id='product-name'
                placeholder='Product Name'
              />
            </div>
            <div className='relative my-5'>
              <label
                className='absolute -top-5 text-extra-light font-thin'
                htmlFor='image-url'>
                Image Url
              </label>
              <input
                type='url'
                className='border-1 border-light w-full rounded outline-none my-1 py-1 px-2 '
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                name='image-url'
                id='image-url'
                placeholder='Product Name'
              />
            </div>
            <div className='relative my-5'>
              <label
                className='absolute -top-5 text-extra-light font-thin'
                htmlFor='description'>
                Description
              </label>
              <input
                type='text'
                className='border-1 border-light w-full rounded outline-none my-1 py-1 px-2 '
                name='description'
                value={dec}
                onChange={(e) => setDec(e.target.value)}
                id='description'
                placeholder='Product Name'
              />
            </div>
            <div className='relative my-5 '>
              <label
                className='absolute -top-5 text-extra-light font-thin'
                htmlFor='price'>
                Price
              </label>
              <input
                type='text'
                className='border-1 border-light w-full rounded outline-none my-1 py-1 px-2 '
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id='price'
                placeholder='Product Name'
              />
            </div>
            <button className='py-2 bg-light w-full rounded font-semibold cursor-pointer'>
              Save Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProducts;
