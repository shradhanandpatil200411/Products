import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/Reducer/userSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;
