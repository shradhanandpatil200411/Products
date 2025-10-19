import { toast } from "react-toastify";
import axios from "../../Api/axios";

export const asyncCreateProduct = (productDetails) => async () => {
  try {
    await axios.post("/product", productDetails);
    toast.success("Product Created Successfully");
  } catch (err) {
    toast.error(err);
  }
};
