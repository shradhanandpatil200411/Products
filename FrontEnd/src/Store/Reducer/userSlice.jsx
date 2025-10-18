import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
  },
  reducers: {
    loadUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { loadUser } = userSlice.actions;
