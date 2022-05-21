import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarouselType } from "types/Carousel";

const initialState: CarouselType = {
  currentIndex: 0,
  name: "",
  description: "",
  promotion: null,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    changeBanner: (state, action: PayloadAction<CarouselType>) => {
      console.log("carousel change", action.payload);
      state.currentIndex = action.payload.currentIndex;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.promotion = action.payload.promotion;

      return state;
    },
    moveLeft: (state) => {},
    moveRight: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { changeBanner, moveLeft, moveRight } = carouselSlice.actions;

export default carouselSlice.reducer;
