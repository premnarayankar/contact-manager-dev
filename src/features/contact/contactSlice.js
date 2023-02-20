import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  editStatus: { status: false, data: {} },
};

if (localStorage.getItem("Contacts")) {
  initialState.value = JSON.parse(localStorage.getItem("Contacts"));
}

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem("Contacts", JSON.stringify([...state.value]));
    },
    setEditStatus: (state, action) => {
      window.scroll(0, 0);
      state.editStatus = {
        ...state.editStatus,
        status: !state.editStatus.status,
        data: action.payload,
      };
    },
    editContact: (state, action) => {
      const edited = state.value.map((contact) =>
        contact.id === action.payload.id
          ? {
              ...contact,
              id: action.payload.id,
              name: action.payload.name,
              contact: action.payload.contact,
              email: action.payload.email,
            }
          : contact
      );
      state.value = edited;
      localStorage.setItem("Contacts", JSON.stringify([...state.value]));
      state.editStatus.status = false;
    },
    deleteContact: (state, action) => {
      const deleted = state.value.filter(
        (contact) => contact.id !== action.payload
      );
      state.value = deleted;
      localStorage.setItem("Contacts", JSON.stringify([...state.value]));
    },
  },
});

export const { addContact, setEditStatus, editContact, deleteContact } =
  contactSlice.actions;
export default contactSlice.reducer;
