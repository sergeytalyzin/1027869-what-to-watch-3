import NameSpace from "../name-space.js";

export const getGenre = (state) => {
  return state[NameSpace.APP_STATUS].genre;
};

export const getFilmsToShowCount = (state) => {
  return state[NameSpace.APP_STATUS].showedFilmsAmount;
};

export const getFilmActive = (state) => {
  return state[NameSpace.DATA].activeFilm;
};

export const getFilmToWatch = (state) => {
  return state[NameSpace.APP_STATUS].filmToWatch;
};
