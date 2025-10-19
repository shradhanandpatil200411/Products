import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/Reducer/userSlice";
import productReducer from "../Store/Reducer/productSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export default Store;
