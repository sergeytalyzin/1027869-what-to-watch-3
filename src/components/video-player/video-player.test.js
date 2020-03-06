import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";

const mock = {
  isPlaying: true,
  videoSrc: `somePath`,
  posterSrc: `somePath`
};

it(`VideoPlayer is renderer correctly`, ()=>{
  const {isPlaying, videoSrc, posterSrc} = mock;

  const tree = renderer.create(<VideoPlayer
    poster={posterSrc}
    isPlaying={isPlaying}
    handleMouse={()=>{}}
    src={videoSrc}
  />, {
    createNodeMock: () => {
      return {play() {}};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
