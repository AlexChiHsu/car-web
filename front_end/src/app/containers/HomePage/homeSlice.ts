import { createSlice } from "@reduxjs/toolkit";
import { IHomeState } from "../../../typings/home";

const initialState: IHomeState = {
  topCars: [],
};

export const homeSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = homeSlice.actions;
export default homeSlice.reducer;
