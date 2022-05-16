import {
  startLoadingPersonajes,
  setPersonajes,
  deletePersonaje,
  addPersonaje,
  searchPersonaje
} from "./starwarsSlice";
import { starWarsApi } from "../../../api/starWarsApi";
import AddPersonaje from "../../../components/AddPersonaje";

export const getPersonajes = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPersonajes());

    const res = await starWarsApi.get("/people");
    dispatch(setPersonajes({ personajes: res.data.results }));
  };
};

export const deletePersonajes = (name) => {
  return async (dispatch, getState) => {
    dispatch(deletePersonaje({ name }));
  };
};

export const AddPersonajes = (personaje) => {
    return async (dispatch, getState) => {
        dispatch(addPersonaje({ personaje: personaje }));
    }   
}

export const searchPersonajes = () => {
  return async (dispatch, getState) => {
      console.log(getState(), "getState");
    const busqueda = getState().starWars.busqueda;
    const res = await starWarsApi.get(`/people/?search=${busqueda}`);
    dispatch(searchPersonaje({ personajes: res.data.results }));
  };
};
