import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface IUser {
  name: string;
  image: string;
}

export type loginState = {
  loggedIn: boolean;
  user: IUser;
};

const initialState: loginState = {
  loggedIn: false,
  user: {
    name: "user",
    image: "user.png",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      localStorage.clear();
      state.loggedIn = false;
      state.user = initialState.user;
    },
  },
});

export const selectLogin = (state: RootState) => state.auth.loggedIn;
export const selectUser = (state: RootState) => state.auth.user;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
