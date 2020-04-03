import {extend} from "../../utils.js";
import adaptFilmsData from "./adapt-films-data.js";

const initializeState = {
  films: [],
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`
};

const ActionCreators = {
  loadFilms: (films) => {
    return {
      type: ActionTypes.LOAD_FILMS,
      payload: films
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const newData = adaptFilmsData(response.data);
        dispatch(ActionCreators.loadFilms(newData));
      });
  }
};


const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreators, Operation};
