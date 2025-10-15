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
// eslint-disable-next-line no-unused-vars
const { loadUser } = userSlice.actions;
