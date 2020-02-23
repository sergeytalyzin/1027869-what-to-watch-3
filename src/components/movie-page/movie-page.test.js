import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const data = [
  {
    id: Math.random(),
    title: `Mindhunter`,
    src: `img/mindhunter.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
  },
  {
    id: Math.random(),
    title: `Midnight Special`,
    src: `img/midnight-special.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/midnight-special.jpg`,
  },
  {
    id: Math.random(),
    title: `War of the Worlds`,
    src: `img/war-of-the-worlds.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/midnight-special.jpg`,
  },
  {
    id: Math.random(),
    title: `Dardjeeling Limited`,
    src: `img/dardjeeling-limited.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/dardjeeling-limited.jpg`,
  },
  {
    id: Math.random(),
    title: `Orlando`,
    src: `img/orlando.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/orlando.jpg`,
  },
  {
    id: Math.random(),
    title: `Seven Years in Tibet`,
    src: `img/seven-years-in-tibet.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/seven-years-in-tibet.jpg`,
  },
  {
    id: Math.random(),
    title: `Moonrise Kingdom`,
    src: `img/moonrise-kingdom.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/moonrise-kingdom.jpg`,
  },
  {
    id: Math.random(),
    title: `Snatch`,
    src: `img/snatch.jpg`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/snatch.jpg`,
  }
];

it (`MoviePage is rendered correctly`,() =>{
  const tree = renderer.create(<MoviePage films={data}/>).toJSON();
  expect(tree).toMatchSnapshot();

});
