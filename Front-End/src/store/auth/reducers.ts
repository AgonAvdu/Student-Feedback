import { PayloadAction } from "@reduxjs/toolkit";
import { removeToken } from "../../helpers";
import { UserState } from "./types";


export const setUser = (state: UserState,action: PayloadAction<any> ) => {
  state.user = action.payload;

}

export const removeUser = (state: UserState) => {
  state.user = undefined;
  removeToken();
}
