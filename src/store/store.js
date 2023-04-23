import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import initialContacts from "../components/phonebook/contacts.json";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const contactsReducer = contactsSlice.reducer;

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      return state = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

const filterReducer = filterSlice.reducer;

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});
