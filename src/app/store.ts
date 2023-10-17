import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authSlice from "app/slice/auth";
import createOrderModalSlice from "app/slice/createOrderModalSlice";
import manageOrdersSlice from "app/slice/manageOrders";

export const store = configureStore({
  reducer: {
    modalState: createOrderModalSlice,
    manageOrders: manageOrdersSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
// setupListeners(store.dispatch);
