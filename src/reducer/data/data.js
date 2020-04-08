import {extend} from "../../utils.js";
import adaptFilmsData, {adaptFilm, adaptReview} from "./adapt-films-data.js";


const initializeState = {
  films: [],
  promoFilm: {},
  reviews: [],
  favoriteFilmsList: []
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  PROMO_FILM: `PROMO_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`
};

const ActionCreators = {
  loadFilms: (films) => {
    return {
      type: ActionTypes.LOAD_FILMS,
      payload: adaptFilmsData(films)
    };
  },
  promoFilm: (film) => {
    return {
      type: ActionTypes.PROMO_FILM,
      payload: adaptFilm(film)
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionTypes.LOAD_REVIEWS,
      payload: reviews
    };
  },
  loadFavoriteFilms: (films) => {
    return {
      type: ActionTypes.LOAD_FAVORITE_FILMS,
      payload: adaptFilmsData(films)
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreators.loadFilms(response.data));
      });
  },
  promoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreators.promoFilm(response.data));
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response)=>{
        const newData = adaptReview(response.data);
        dispatch(ActionCreators.loadReviews(newData));
      });
  },
  postReview: (id, review) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      rating: review.rating,
      comment: review.comment
    })
      .catch((err) => {
        throw err;
      });
  },
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response)=>{
        dispatch(ActionCreators.loadFavoriteFilms(response.data));
      });
  },
  postFavoriteFilms: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`);
  },
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
    case ActionTypes.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionTypes.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilmsList: action.payload,
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreators, Operation};
