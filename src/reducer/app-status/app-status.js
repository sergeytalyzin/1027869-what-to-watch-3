import {extend} from "../../utils.js";

const FILMS_SHOWED_ON_START_AMOUNT = 8;
const FILMS_SHOWED_INCREMENT_AMOUNT = 8;

const initialState = {
  genre: `All genres`,
  showedFilmsAmount: FILMS_SHOWED_INCREMENT_AMOUNT,
  activeFilm: null,
  filmToWatch: null
};

const ActionType = {
  CHANGE_GENRE: `Change genre`,
  INCREMENT_SHOWED: `Increment showed`,
  RESET_SHOWED: `Reset showed`,
  ADD_ACTIVE_FILM: `Add active film`,
  SET_FILM_TO_WATCH: `SET_FILM_TO_WATCH`,
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
  }),
  setFilmToWatch: (film) => ({
    type: ActionType.SET_FILM_TO_WATCH,
    payload: film
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.INCREMENT_SHOWED:
      return extend(state, {
        showedFilmsAmount: state.showedFilmsAmount + action.payload,
      });
    case ActionType.RESET_SHOWED:
      return extend(state, {
        showedFilmsAmount: FILMS_SHOWED_ON_START_AMOUNT
      });
    case ActionType.ADD_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
    case ActionType.SET_FILM_TO_WATCH:
      return extend(state, {
        filmToWatch: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
