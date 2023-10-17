import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { OrderProps } from "features/cardList/index.interface";

export type orderState = {
  orders: OrderProps[];
  deleteOrders: OrderProps[];
};

const initialState: orderState = {
  orders: [],
  deleteOrders: [],
};

const manageOrdersSlice = createSlice({
  name: "manageOrders",
  initialState,
  reducers: {
    initializeState: (state) => {
      state.orders = JSON.parse(localStorage.getItem("orders") || "[]");
      state.deleteOrders = JSON.parse(
        localStorage.getItem("deletedOrders") || "[]"
      );
    },
    createOrder: (state, { payload }) => {
      state.orders = [payload, ...state.orders];
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    editOrder: (state, { payload }) => {
      const rest = state.orders.filter((item) => item.id === payload.id);
      state.orders = [payload, ...rest];
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    deleteOrder: (state, { payload }) => {
      const [deletedOrder, ...newState] = state.orders;
      if (deletedOrder) {
        state.orders = newState;
      }
      state.deleteOrders = [...state.deleteOrders, payload];
      localStorage.setItem("orders", JSON.stringify(state.orders));
      localStorage.setItem("deletedOrders", JSON.stringify(state.deleteOrders));
    },
  },
});

export const selectOrders = (state: RootState) => state.manageOrders.orders;
export const selectDeletedOrders = (state: RootState) =>
  state.manageOrders.deleteOrders;
export const { createOrder, deleteOrder, editOrder, initializeState } =
  manageOrdersSlice.actions;
export default manageOrdersSlice.reducer;
