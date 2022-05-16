import { createSlice } from "@reduxjs/toolkit";

export const starWarsSlice = createSlice({
  name: "starWars",
  initialState: {
    personajes: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPersonajes: (state) => {
      state.isLoading = true;
    },
    setPersonajes: (state, action) => {
      state.isLoading = false;
      state.personajes = action.payload.personajes;
    },

    deletePersonaje: (state, action) => {
      state.personajes = state.personajes.filter(
        (personaje) => personaje.name !== action.payload.name
      );
    },

    addPersonaje: (state, action) => {
        state.personajes.push(action.payload.personaje);
    },

    searchPersonaje: (state, action) => {
        state.personajes = action.payload.personajes;
      },
  },

 
});

export const { startLoadingPersonajes, setPersonajes, deletePersonaje, addPersonaje,  searchPersonaje } =
  starWarsSlice.actions;
