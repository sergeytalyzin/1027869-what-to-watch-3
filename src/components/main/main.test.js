import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const data = {
  genre: `Comedy`,
  title: `Terminator`,
  date: 1812,
  listFilms: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

it(`Should Main render correctly`, () => {
  const tree = renderer.create(<Main
    title={data.title}
    genre={data.genre}
    date={data.date}
    listFilms={data.listFilms}
    onTitleClick={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
