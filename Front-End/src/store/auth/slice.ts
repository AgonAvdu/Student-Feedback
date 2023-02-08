import { createSlice } from "@reduxjs/toolkit";

import * as authReducers from "./reducers";
import { UserState } from "./types";

//Types

//State
const initialState: UserState = {
  user: undefined,
};

//Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: authReducers.setUser,
    removeUser: authReducers.removeUser,

  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
