import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const data = {
  genre: `Comedy`,
  title: `Terminator`,
  date: 1812,
  listFilms: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

it(`Render App`, () => {
  const tree = renderer.create(<App
    title={data.title}
    genre={data.genre}
    date={data.date}
    listFilms={data.listFilms}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
