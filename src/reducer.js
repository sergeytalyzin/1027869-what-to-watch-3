import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {genreType} from "./const.js";

const DEFAULT_FILMS_COUNT = 8;
const COUNT_SHOW_MORE = 8;
let prevFilmsShowing = 0;
let showingFilmsCount = DEFAULT_FILMS_COUNT;


const initialState = {
  genre: `All genres`,
  listFilms: films.slice(prevFilmsShowing, showingFilmsCount),
  allListFilms: films,
  filmsLength: films.length,
};

const filterFilm = (genre) => {
  return films.filter((film)=>film.genre === genre);
};

const ActionCreator = {
  setGenre(type) {
    showingFilmsCount = DEFAULT_FILMS_COUNT;
    if (type === genreType.ALL) {
      return {type, listFilms: films.slice(prevFilmsShowing, showingFilmsCount), filmsLength: films.length};
    } else {
      return {type, listFilms: filterFilm(type).slice(prevFilmsShowing, showingFilmsCount), filmsLength: filterFilm(type).length};
    }
  },
  onClickShowMore(type) {
    showingFilmsCount = showingFilmsCount + COUNT_SHOW_MORE;
    if (type === genreType.ALL) {
      return {type, listFilms: films.slice(prevFilmsShowing, showingFilmsCount), filmsLength: films.length};
    } else {
      return {type, listFilms: filterFilm(type).slice(prevFilmsShowing, showingFilmsCount), filmsLength: filterFilm(type).length};
    }
  }
};

const reducer = (state = initialState, action) => {
  if (action.type !== `@@INIT`) {
    return extend(state, {genre: action.type, listFilms: action.listFilms, filmsLenght: action.filmsLenght});
  }
  return state;
};


export {reducer, ActionCreator};
