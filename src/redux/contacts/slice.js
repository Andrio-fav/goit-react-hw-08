import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";
import { logout } from "../auth/operations";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => builder.addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
    }).addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    }).addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    }).addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
    }).addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id)
    }).addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    }).addCase(addContact.pending, (state) => {
        state.loading = true;
    }).addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload)
    }).addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    }).addCase(logout.fulfilled, (state) => {
        state.items = [];
    })
})

export default slice.reducer;