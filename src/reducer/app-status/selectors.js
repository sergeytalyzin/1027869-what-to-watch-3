import NameSpace from "../name-space.js";

export const getGenre = (state) => {
  return state[NameSpace.APP_STATUS].genre;
};

export const getFilmsToShowCount = (state) => {
  return state[NameSpace.APP_STATUS].showedFilmsAmount;
};

export const getLoggingStatus = (state) => {
  return state[NameSpace.APP_STATUS].isLogging;
};

export const getFilmActive = (state) => {
  return state[NameSpace.APP_STATUS].activeFilm;
};

export const getFilmToWatch = (state) => {
  return state[NameSpace.APP_STATUS].filmToWatch;
};
