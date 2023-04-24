import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from './contactsApi';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactsApi.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error)
        }
},
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const contacts = await contactsApi.addContact(newContact);
            return contacts;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const contacts = await contactsApi.deleteContact(id);
            return contacts;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// export const addContact = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest());

//     try {
//         const contacts = await contactsApi.addContact();
//         dispatch(contactsActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError(error));
//     }
// };

// export const deleteContact = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest());

//     try {
//         const contacts = await contactsApi.deleteContact();
//         dispatch(contactsActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError(error));
//     }
// };
