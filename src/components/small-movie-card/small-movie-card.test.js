import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const RatingDescription = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very good`,
  `Awesome`,
];

const Description = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`];

const DetailsNames = [`Frank Sinatra`, `John Mason`, `Anthony Mann`, `Bred Pitt`, `Heinz Herald`, `Richard Weil`, `Anne Wigton`,
  `Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`];

const getRandomRating = (min, max) => {
  return Number((min + (max - min) * Math.random()).toFixed(2));
};

const getRandomArray = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

const getRandomNumber = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
};

const getRandomDescription = () => {
  let count = getRandomNumber(1, 3);
  let Desc = ``;

  for (let i = 0; i < count; i++) {
    Desc = Desc + Description[getRandomNumber(0, Description.length - 1)];
  }
  return Desc;
};
const generateListNames = (names) => {
  return names.filter(()=> Math.random() > 0.5);
};

const data = [
  {
    id: Math.random(),
    title: `Mindhunter`,
    src: `img/mindhunter.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: Math.random(),
    title: `Midnight Special`,
    src: `img/midnight-special.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/midnight-special.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer.create(<SmallMovieCard
    onActiveFilm={()=>{}}
    film={data[0]}
    handleClickItem={()=>{}}
    active={{}}
  />, {
    createNodeMock: () => {
      return {play() {}};
    }
  }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
