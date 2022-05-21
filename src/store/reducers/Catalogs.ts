import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Catalog } from "types/Catalog";

const initialState: Array<Catalog> = [];

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    initCatalog: (state, action: PayloadAction<Array<Catalog>>) => {
      console.log("init catalog", action.payload);
      return [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { initCatalog } = catalogSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default catalogSlice.reducer;
