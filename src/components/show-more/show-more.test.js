import React from "react";
import renderer from "react-test-renderer";
import {ShowMore} from "./show-more.jsx";

it(`Should ShowMore render correctly`, ()=>{
  const tree = renderer.create(<ShowMore
    onButtonClick={()=>{}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
