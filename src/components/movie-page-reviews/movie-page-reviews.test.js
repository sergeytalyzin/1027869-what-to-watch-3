import React from "react";
import renderer from "react-test-renderer";
import {MoviePageReviews} from "./movie-page-reviews.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";


const mockStore = configureStore([]);


const films = [
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
    runTime: 11,
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
    runTime: 11,
  },
];
const film = {
  id: 8,
  title: `Mindhunter`,
  src: `img/mindhunter.jpg`,
  genre: `Comedy`,
  videoSrc: `Some path`,
  date: 1812,
  posterBig: `img/mindhunter.jpg`,
  rating: 4,
  ratingLevel: `Awesome`,
  ratingCount: 433,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
  director: `John Mason`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  bg: ``,
  bgSrc: `somePath`,
  runTime: 11,
};

const reviews = [
  {
    rating: 8.5,
    reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    reviewer: `Kate Muir`,
    reviewDate: `2016-12-24`
  },
  {
    rating: 8.6,
    reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    reviewer: `Kate Muir`,
    reviewDate: `2016-12-24`
  },
  {
    rating: 8.7,
    reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    reviewer: `Kate Muir`,
    reviewDate: `2016-12-24`
  },
  {
    rating: 8.8,
    reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    reviewer: `Kate Muir`,
    reviewDate: `2016-12-24`
  },
  {
    rating: 8.9,
    reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    reviewer: `Kate Muir`,
    reviewDate: `2016-12-24`
  }
];

it(`MoviePageReviews is rendered correctly`, () => {
  const store = mockStore({
    DATA: {
      film,
      films,
    },
    APP_STATUS: {
      genre: `All genres`,
      filmsToShowCount: 8,
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <MoviePageReviews
          filmId={1}
          reviews={reviews}
          loadReviews={()=>{}}
          film={film}/>)
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
  expect(tree).toMatchSnapshot();
});

