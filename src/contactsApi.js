// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//     reducerPath: 'contactsApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://64458dd90431e885f0001114.mockapi.io/contacts/',
//     }),
//     endpoints: builder => ({
//         fetchContacts: builder.query({
//             query: () => '/contacts',
//         }),
//     }),
// });

// export const { useFetchContactsQuery } = contactsApi;

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const baseUrl = 'https://64458dd90431e885f0001114.mockapi.io/contacts';

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async () => {
//       const {data} = await axios.get(baseUrl);
//       return data;
//     }
// )

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contact) => {
//       const {data} = await axios.post(baseUrl, contact);
//       return data;
//     }
// )

// export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (id) => {
//       const {data} = await axios.delete(`${baseUrl}/${id}`);
//       return data;
//     }
// )

import axios from "axios";

const baseUrl = 'https://64458dd90431e885f0001114.mockapi.io/contacts/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(baseUrl);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(baseUrl, contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
}