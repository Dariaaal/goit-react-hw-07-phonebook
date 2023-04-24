import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
});

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
