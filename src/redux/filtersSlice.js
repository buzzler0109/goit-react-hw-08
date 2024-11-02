import { createSlice } from "@reduxjs/toolkit";

const filtersSlise = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlise.actions;

export const selectNameFilter = (state) => state.filters.name;

export const filtersReducer = filtersSlise.reducer;
