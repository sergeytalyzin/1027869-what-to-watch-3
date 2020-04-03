import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {getGenre, getFilmsToShowCount} from "../app-status/selectors.js";
import {genreType} from "../../const.js";

export const getAllFilms = (state)=> {
  return state[NameSpace.DATA].films;
};


export const getFilmsToRender = createSelector(
    getAllFilms,
    getGenre,
    getFilmsToShowCount, (films, genre, filmsCount) => {
      if (genre === genreType.ALL) {
        return films.slice(0, filmsCount);
      }

      const filteredFilms = films.filter((film)=> film.genre === genre);
      return filteredFilms.slice(0, filmsCount);
    });
