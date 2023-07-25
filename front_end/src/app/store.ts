import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homeSlice from "./containers/HomePage/homeSlice";

export const store = configureStore({
  reducer: {
    homePage: homeSlice,
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
