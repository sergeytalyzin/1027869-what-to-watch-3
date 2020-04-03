import {reducer, ActionType, ActionCreator} from "./app-status.js";
import {genreType} from "../../const.js";


const data = [
  {
    id: 1,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 3,
    ratingLevel: `Very good`,
    ratingCount: 111,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `Frank Sinatra`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
  {
    id: 2,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 3,
    ratingLevel: `Very good`,
    ratingCount: 111,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `Frank Sinatra`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
];

const filterFilm = (genre) => {
  return data.filter((film)=>film.genre === genre);
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer({
    genre: `All genres`,
    listFilms: data.slice(0, 8),
    allListFilms: data,
    filmsLength: data.length,
  }, {})).toEqual({
    genre: `All genres`,
    listFilms: data.slice(0, 8),
    allListFilms: data,
    filmsLength: data.length,
  });
});
it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer({
    genre: `All genres`,
    listFilms: data.slice(0, 8),
    allListFilms: data,
    filmsLength: data.length,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Comedy`,
  })).toEqual({
    genre: `Comedy`,
    listFilms: filterFilm(genreType.COMEDIES).slice(0, 8),
    allListFilms: data,
    filmsLength: filterFilm(genreType.COMEDIES).length,
  });
});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer({
    genre: `Comedy`,
    listFilms: filterFilm(genreType.COMEDIES).slice(0, 8),
    allListFilms: data,
    filmsLength: filterFilm(genreType.COMEDIES).length,
    showedFilmsAmount: 8,
  }, {
    type: ActionType.INCREMENT_SHOWED,
    payload: 8,
  })).toEqual({
    genre: `Comedy`,
    listFilms: filterFilm(genreType.COMEDIES).slice(0, 16),
    allListFilms: data,
    filmsLength: filterFilm(genreType.COMEDIES).length,
    showedFilmsAmount: 16,
  });
});
it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer({
    genre: `Comedy`,
    listFilms: filterFilm(genreType.COMEDIES).slice(0, 16),
    allListFilms: data,
    filmsLength: filterFilm(genreType.COMEDIES).length,
    showedFilmsAmount: 16,
  }, {
    type: ActionType.RESET_SHOWED,
  })).toEqual({
    genre: `Comedy`,
    listFilms: filterFilm(genreType.COMEDIES).slice(0, 8),
    allListFilms: data,
    filmsLength: filterFilm(genreType.COMEDIES).length,
    showedFilmsAmount: 8,
  });
});

describe(`Actions creators work correctly`, () => {
  it(`Action creators for increment showed return correct action`, () => {
    expect(ActionCreator.incrementShowed()).toEqual({
      type: ActionType.INCREMENT_SHOWED,
      payload: 8
    });
  });
  it(`Action creators for reset showed return correct action`, () => {
    expect(ActionCreator.resetShowed()).toEqual({
      type: ActionType.RESET_SHOWED,
    });
  });
  it(`Action creators for change genre return correct action`, () => {
    expect(ActionCreator.changeGenre(genreType.COMEDIES)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: genreType.COMEDIES
    });
  });
});

