import { toast } from "react-toastify";
import axios from "../../Api/axios";
import { loadProducts } from "../Reducer/productSlice";

export const asyncCreateProduct = (productDetails) => async () => {
  try {
    await axios.post("/product", productDetails);
    toast.success("Product Created Successfully");
  } catch (err) {
    toast.error(err);
  }
};

export const asyncLoadProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("product");
    dispatch(loadProducts(data));
  } catch (err) {
    console.log(err);
  }
};
