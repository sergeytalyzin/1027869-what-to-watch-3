import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title click be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        films={data}
        onTitleClick={onTitleClick}
      />
  );

  const mainTitle = main.find(`h2.movie-card__title`);

  mainTitle.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
