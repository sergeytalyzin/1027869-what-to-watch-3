import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

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
  {
    id: 3,
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
    id: 4,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 6,
    ratingLevel: `Very good`,
    ratingCount: 233,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `John Mason`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
  {
    id: 5,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 6,
    ratingLevel: `Very good`,
    ratingCount: 233,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `John Mason`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
  {
    id: 6,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 8,
    ratingLevel: `Good`,
    ratingCount: 924,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `Anthony Mann`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
  {
    id: 7,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 1,
    ratingLevel: `Bad`,
    ratingCount: 743,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `Bred Pitt`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
  {
    id: 8,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
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
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});
const mockEvent = {
  preventDefault() {}
};

it(`Should title click be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(<Main
    onGenreClick={()=>{}}
    films={data}
    allListFilms={data}
    onTitleClick={onTitleClick}/>, {
    createNodeMock: () => {
      return {};
    }
  }
  );

  const mainTitle = main.find(`h2.movie-card__title`);

  mainTitle.simulate(`click`, mockEvent);

  expect(mainTitle.find(`.movie-card__title`).length).toEqual(1);
});
