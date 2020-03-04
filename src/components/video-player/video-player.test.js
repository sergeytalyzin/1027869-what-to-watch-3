import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";

const mock = {
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`VideoPlayer is renderer correctly`, ()=>{
  const {previewVideoLink} = mock;

  const tree = renderer.create(<VideoPlayer
    src={previewVideoLink}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
