import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const data = {
  genre: `Comedy`,
  title: `Terminator`,
  date: 1812,
  listFilms: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title click be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        title={data.title}
        genre={data.genre}
        date={data.date}
        listFilms={data.listFilms}
        onTitleClick={onTitleClick}
      />
  );

  const mainTitle = main.find(`h2.movie-card__title`);

  mainTitle.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
