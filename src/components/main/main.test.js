import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

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

it(`Should Main render correctly`, () => {
  const tree = renderer.create(<Main onTitleClick={()=>{
    return `привет`;
  }} films={data}/>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();
  expect(tree).toMatchSnapshot();
});
