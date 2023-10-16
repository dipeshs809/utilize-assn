import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterSlice from "app/slice/exampleSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
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
