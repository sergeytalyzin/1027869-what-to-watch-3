import React from "react";
import renderer from "react-test-renderer";
import MoviePageOverview from "./movie-page-overview.jsx";

const film = {
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
};

it(`MoviePageDetails is rendered correctly`, () => {
  const tree = renderer.create(<MoviePageOverview
    film={film}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
