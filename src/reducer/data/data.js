import {extend} from "../../utils.js";
import adaptFilmsData, {adaptFilm} from "./adapt-films-data.js";


const initializeState = {
  films: [],
  promoFilm: {}
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  PROMO_FILM: `PROMO_FILM`
};

const ActionCreators = {
  loadFilms: (films) => {
    return {
      type: ActionTypes.LOAD_FILMS,
      payload: films
    };
  },
  promoFilm: (film) => {
    return {
      type: ActionTypes.PROMO_FILM,
      payload: film
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    console.log(`api`, api);
    return api.get(`/films`)
      .then((response) => {
        const newData = adaptFilmsData(response.data);
        console.log(newData);
        dispatch(ActionCreators.loadFilms(newData));
      });
  },
  promoFilm: (dispatch, getState, api) => {
    console.log(api);
    return api.get(`/films/promo`)
      .then((response) => {
        const newData = adaptFilm(response.data);
        console.log(newData);
        dispatch(ActionCreators.promoFilm(newData));
      });
  }
};


const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionTypes.PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreators, Operation};
