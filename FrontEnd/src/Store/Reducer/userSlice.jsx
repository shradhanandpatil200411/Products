import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
  },
  reducers: {
    loadUser: (state, action) => {
      state.userData = [action.payload];
    },
    removeUser: (state) => {
      state.userData = null;
    },
  },
});

export default userSlice.reducer;
export const { loadUser, removeUser } = userSlice.actions;
