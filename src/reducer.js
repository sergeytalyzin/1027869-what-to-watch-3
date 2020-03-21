import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {genreType} from "./const.js";

let prevFilmsShowing = null;
let showingFilmsCount = 8;
let prevGenre = 0;


const initialState = {
  genre: `All genres`,
  listFilms: films.slice(prevFilmsShowing, showingFilmsCount),
  allListFilms: films,
};

const filterFilm = (genre) => {
  return films.filter((film)=>film.genre === genre);
};

const ActionCreator = {
  setGenre(type) {
    if (type === genreType.ALL) {
      return {type, listFilms: films};
    } else {
      prevGenre = type;
      return {type, listFilms: filterFilm(type)};
    }
  },
  onClickShowMore() {
    showingFilmsCount = showingFilmsCount + 4;
    return {type: prevGenre, listFilms: films.slice(prevFilmsShowing, showingFilmsCount)};
  }
};

const reducer = (state = initialState, action) => {
  if (action.listFilms) {
    return extend(state, {genre: action.type, listFilms: action.listFilms});
  }
  return state;
};

export {reducer, ActionCreator};
