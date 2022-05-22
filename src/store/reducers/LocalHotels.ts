import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  localIndex: 0,
  hotelIndex: 0,
};

export const localHotelSlice = createSlice({
  name: "localHotels",
  initialState,
  reducers: {
    changeLocalIndex: (state, action: PayloadAction<number>) => {
      console.log("change Local", action.payload);
      state = { ...state, localIndex: action.payload };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLocalIndex } = localHotelSlice.actions;

export default localHotelSlice.reducer;
