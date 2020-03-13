import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const data = [
  {
    id: 1,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    previewVideoLink: `somePath`,
  },
  {
    id: 2,
    title: `Midnight Special`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    previewVideoLink: `somePath`,
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
