import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: data,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
      })
      .addCase(updateContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      }),
});

export const contactsReducer = contactsSlice.reducer;
