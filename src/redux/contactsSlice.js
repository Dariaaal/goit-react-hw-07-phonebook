import { createReducer, combineReducers, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperations";

const handlePending = (state) => {
    state.isLoading = true
}

const handleFulfilled = (state, {payload}) => {
    state.isLoading = false
    state.items = payload
    state.error = null
}

const handleRejected = (state, {payload}) => {
    state.isLoading = false
    state.error = payload
}

const handleUpdate = (state, { payload }) => {
    state.isLoading = false
    state.items.push(payload)
    state.error = ''
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: [], isLoading: false, error: null},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            // .addCase(addContact.pending, handlePending)
            // .addCase(addContact.fulfilled, handleUpdate)
            // .addCase(addContact.rejected, handleRejected)
            // .addCase(deleteContact.pending, handlePending)
            // .addCase(deleteContact.fulfilled, handleFulfilled)
            // .addCase(deleteContact.rejected, handleRejected)
    }
});

export default contactsSlice.reducer;
