import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      const allProducts = [...state.products, ...action.payload];
      state.products = allProducts;
    },
  },
});

export default productSlice.reducer;
export const { loadProducts } = productSlice.actions;
