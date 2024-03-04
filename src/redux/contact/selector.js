import { createSelector } from "@reduxjs/toolkit";
export const selectDataContacts = (state) => state.contact.items;
export const selectFilter = (state) => state.filter;
export const selectIsLoading = (state) => state.contact.isLoading;
export const filtData = createSelector(
  [selectDataContacts, selectFilter],
  (contacts, filter) => {
    if (filter === "") {
      return contacts.filter( => {
  
      });
    }
    
  }
);