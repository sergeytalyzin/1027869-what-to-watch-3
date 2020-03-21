import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {genreType} from "./const.js";

let prevFilmsShowing = 0;
let showingFilmsCount = 8;


const initialState = {
  genre: `All genres`,
  listFilms: films.slice(prevFilmsShowing, showingFilmsCount),
  allListFilms: films,
  filmsLenght: films.length,
};

const filterFilm = (genre) => {
  return films.filter((film)=>film.genre === genre);
};

const ActionCreator = {
  setGenre(type) {
    if (type === genreType.ALL) {
      return {type, listFilms: films.slice(prevFilmsShowing, showingFilmsCount), filmsLenght: films.length};
    } else {
      return {type, listFilms: filterFilm(type).slice(prevFilmsShowing, showingFilmsCount), filmsLenght: filterFilm(type).length};
    }
  },
  onClickShowMore(type) {
    showingFilmsCount = showingFilmsCount + 4;
    if (type === genreType.ALL) {
      return {type, listFilms: films.slice(prevFilmsShowing, showingFilmsCount)};
    } else {
      return {type, listFilms: filterFilm(type).slice(prevFilmsShowing, showingFilmsCount)};
    }
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case genreType.ALL:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.COMEDIES:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.DRAMAS:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.DOCUMENTARY:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.HORROR:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.KIDS_FAMILY:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.ROMANCE:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.SCI_FI:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.THRILLERS:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
    case genreType.CRIME:
      return extend(state, {genre: action.type, listFilms: action.listFilms});
  }
  return state;
};



export {reducer, ActionCreator};
