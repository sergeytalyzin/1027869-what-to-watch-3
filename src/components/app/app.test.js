import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer.create(<App films={data} />).toJSON();

  expect(tree).toMatchSnapshot();
});
