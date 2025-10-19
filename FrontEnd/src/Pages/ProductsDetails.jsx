import { useSelector } from "react-redux";
import { useParams } from "react-router";

function ProductsDetails() {
  const { products } = useSelector((store) => store.products);
  console.log(products, "pro");

  const { id } = useParams();
  const getMyProduct = products?.filter((p) => p.id == id);
  console.log(getMyProduct, "sdadfadf");

  const { imageUrl, dec, name, price } = getMyProduct[0];
  return getMyProduct ? (
    <>
      <div className='flex border p-10 w-[80%] mx-auto mt-10 rounded-2xl'>
        <div className='w-[50%]  p-5'>
          <img className='' src={imageUrl} alt='product-image' />
        </div>
        <div className='w-[50%] p-10'>
          <h1 className='font-bold text-4xl my-2'>{name}</h1>
          <h1 className='font-bold text-3xl my-5'>₹ {price}</h1>
          <p>{dec}</p>
          <button className='bg-light font-semibold my-5 px-4 py-2 rounded w-full cursor-pointer'>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default ProductsDetails;
