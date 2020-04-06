import {extend} from "../../utils.js";


const FILMS_SHOWED_ON_START_AMOUNT = 8;
const FILMS_SHOWED_INCREMENT_AMOUNT = 8;

const initialState = {
  genre: `All genres`,
  showedFilmsAmount: FILMS_SHOWED_INCREMENT_AMOUNT,
  activeFilm: null,
  filmToWatch: null,
  isLogging: false,
  isAddReviews: false,
};

const ActionType = {
  ADD_REVIEWS: `Add Reviews`,
  CHANGE_GENRE: `Change genre`,
  INCREMENT_SHOWED: `Increment showed`,
  RESET_SHOWED: `Reset showed`,
  ADD_ACTIVE_FILM: `Add active film`,
  SET_FILM_TO_WATCH: `SET_FILM_TO_WATCH`,
  CHANGE_LOGGING_STATUS: `CHANGE_LOGGING_STATUS`,
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
  changeLoggingStatus: () =>({
    type: ActionType.CHANGE_LOGGING_STATUS,
  }),
  addReviews: () =>({
    type: ActionType.ADD_REVIEWS,
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
    case ActionType.CHANGE_LOGGING_STATUS:
      return extend(state, {
        isLogging: !state.isLogging
      });
    case ActionType.ADD_REVIEWS:
      return extend(state, {
        isAddReviews: !state.isAddReviews
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
