import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";

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
  },
  {
    id: Math.random(),
    title: `Mindhunter`,
    src: `path`,
    genre: `Comedy`,
    date: 1812,
  },
  {
    id: Math.random(),
    title: `Midnight Special`,
    src: `path`,
    genre: `Comedy`,
    date: 1812,
  },
];

it(`Should MovieList render correctly`, ()=>{
  const tree = renderer.create(<MovieList films={data} onTitleClick={()=>{}}/>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
