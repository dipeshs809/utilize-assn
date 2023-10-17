import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type modalState = {
  open: boolean;
};

const initialState: modalState = {
  open: false,
};

const createOrderModalSlice = createSlice({
  name: "toggleModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.open = !state.open;
    },
  },
});

export const selectOpen = (state: RootState) => state.modalState.open;
export const { toggleModal } = createOrderModalSlice.actions;
export default createOrderModalSlice.reducer;
