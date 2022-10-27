import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
  name: "userName",
  initialState: "hola",
  reducers: {
    setUserNameGlobal: (state, action) => action.payload,
  },
});

export const { setUserNameGlobal } = userNameSlice.actions;

export default userNameSlice.reducer;
