import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type loginState = {
  loggedIn: boolean;
};

const initialState: loginState = {
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      localStorage.clear();
      state.loggedIn = false;
    },
  },
});

export const selectLogin = (state: RootState) => state.modalState.open;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
