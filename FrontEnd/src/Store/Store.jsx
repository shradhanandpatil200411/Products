import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Store/Reducer/userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default Store;
