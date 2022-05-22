import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Banner } from "types/Banner";

const initialState: Array<Banner> = [];

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    initBanner: (state, action: PayloadAction<Array<Banner>>) => {
      console.log("init Banner", action.payload);

      if (action.payload) {
        return [...action.payload];
      } else {
        return initialState;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { initBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
