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

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://64458dd90431e885f0001114.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
      const {data} = await axios.get(baseUrl);
      return data;
    }
)

export const addContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (contact) => {
      const {data} = await axios.post(baseUrl, contact);
      return data;
    }
)

export const deleteContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (id) => {
      const {data} = await axios.delete(`${baseUrl}/${id}`);
      return data;
    }
)


