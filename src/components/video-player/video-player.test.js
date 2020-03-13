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
    isPlaying={isPlaying}
    src={videoSrc}
    poster={posterSrc}
    handleMouseEnter={()=>{}}
    handleMouseOut={()=>{}}
  />, {
    createNodeMock: () => {
      return {play() {}};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
