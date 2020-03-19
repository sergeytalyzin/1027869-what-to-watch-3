import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {genreType} from "./const.js";

const initialState = {
  genre: `All genres`,
  listFilms: films,
  allListFilms: films,
};

const filterFilm = (genre) => {
  return films.filter((film)=>film.genre === genre);
};

const ActionCreator = {
  setGenre(type) {
    switch (type) {
      case genreType.ALL:
        return {
          type: genreType.ALL,
          listFilms: films,
        };
      case genreType.COMEDIES:
        return {
          type: genreType.COMEDIES,
          listFilms: filterFilm(genreType.COMEDIES),
        };
      case genreType.DRAMAS:
        return {
          type: genreType.DRAMAS,
          listFilms: filterFilm(genreType.DRAMAS),
        };
      case genreType.DOCUMENTARY:
        return {
          type: genreType.DOCUMENTARY,
          listFilms: filterFilm(genreType.DOCUMENTARY),
        };
      case genreType.HORROR:
        return {
          type: genreType.HORROR,
          listFilms: filterFilm(genreType.HORROR),
        };
      case genreType.KIDS_FAMILY:
        return {
          type: genreType.KIDS_FAMILY,
          listFilms: filterFilm(genreType.KIDS_FAMILY),
        };
      case genreType.ROMANCE:
        return {
          type: genreType.ROMANCE,
          listFilms: filterFilm(genreType.ROMANCE),
        };
      case genreType.SCI_FI:
        return {
          type: genreType.SCI_FI,
          listFilms: filterFilm(genreType.SCI_FI),
        };
      case genreType.THRILLERS:
        return {
          type: genreType.THRILLERS,
          listFilms: filterFilm(genreType.THRILLERS),
        };
      case genreType.CRIME:
        return {
          type: genreType.CRIME,
          listFilms: filterFilm(genreType.CRIME),
        };
    }
    return {
      type: genreType.ALL,
      listFilms: films,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case genreType.ALL:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.CRIME:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.SCI_FI:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.HORROR:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.THRILLERS:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.DRAMAS:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.DOCUMENTARY:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.KIDS_FAMILY:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.COMEDIES:
      return extend(state, {type: action.type, listFilms: action.listFilms});
    case genreType.ROMANCE:
      return extend(state, {type: action.type, listFilms: action.listFilms});
  }
  return state;
};

export {reducer, ActionCreator};
