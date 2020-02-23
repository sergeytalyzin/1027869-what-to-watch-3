import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const data = [
  {
    id: Math.random(),
    title: `Mindhunter`,
    src: `img/mindhunter.jpg`,
    genre: `Comedy`,
    date: 1812,
  },
  {
    id: Math.random(),
    title: `Midnight Special`,
    src: `img/midnight-special.jpg`,
    genre: `Comedy`,
    date: 1812,
  }
];

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer.create(<SmallMovieCard
    handleMouseEnter={()=>{}}
    film={data[0]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
