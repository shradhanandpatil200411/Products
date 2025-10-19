import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
import { asyncLoadProducts } from "../Store/Actions/productAction";

function Products() {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadProducts());
  }, [products]);

  return products.length > 0 ? (
    <>
      <div className=' flex justify-evenly flex-wrap p-10  w-[100%]'>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            dec={product.dec}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Products;
