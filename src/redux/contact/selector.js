import { createSelector } from "@reduxjs/toolkit";
export const selectDataContacts = (state) => state.contact.items;
export const selectFilter = (state) => state.filter;
export const selectIsLoading = (state) => state.contact.isLoading;


const initialState = "";

const filterSlice = createSelector({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterNumbers: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterNumbers } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;