import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {genreType} from "./const.js";

const FILMS_SHOWED_ON_START_AMOUNT = 8;
const FILMS_SHOWED_INCREMENT_AMOUNT = 8;


const filterFilm = (genre) => {
  return films.filter((film)=>film.genre === genre);
};

const filterActiveFilm = (activeFilm) => {
  const [currentFilm] = films.filter((film)=>film === activeFilm);
  return currentFilm;
};


const initialState = {
  genre: `All genres`,
  listFilms: films.slice(0, FILMS_SHOWED_ON_START_AMOUNT),
  allListFilms: films,
  filmsLength: films.length,
  showedFilmsAmount: FILMS_SHOWED_INCREMENT_AMOUNT,
  activeFilm: null
};

const ActionType = {
  CHANGE_GENRE: `Change genre`,
  INCREMENT_SHOWED: `Increment showed`,
  RESET_SHOWED: `Reset showed`,
  ADD_ACTIVE_FILM: `Add active film`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  incrementShowed: () => ({
    type: ActionType.INCREMENT_SHOWED,
    payload: FILMS_SHOWED_INCREMENT_AMOUNT
  }),
  resetShowed: () => ({
    type: ActionType.RESET_SHOWED,
  }),
  activeFilm: (film) => ({
    type: ActionType.ADD_ACTIVE_FILM,
    payload: film
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      if (action.payload === genreType.ALL) {
        return extend({}, initialState);
      }

      return extend(state, {
        genre: action.payload,
        listFilms: filterFilm(action.payload).slice(0, state.showedFilmsAmount),
        filmsLength: filterFilm(action.payload).length,
      });

    case ActionType.INCREMENT_SHOWED:
      let nextShowedFilmsAmount = state.showedFilmsAmount + action.payload;

      if (state.genre === genreType.ALL) {
        return extend(state, {
          showedFilmsAmount: state.showedFilmsAmount + action.payload,
          listFilms: films.slice(0, nextShowedFilmsAmount),
        });
      }

      return extend(state, {
        showedFilmsAmount: state.showedFilmsAmount + action.payload,
        listFilms: filterFilm(state.genre).slice(0, nextShowedFilmsAmount),
      });

    case ActionType.RESET_SHOWED:
      return extend(state, {
        showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
      });
    case ActionType.ADD_ACTIVE_FILM:
      return extend(state, {
        activeFilm: filterActiveFilm(action.payload),
      });

  }

  return state;
};

export {reducer, ActionCreator, ActionType};
