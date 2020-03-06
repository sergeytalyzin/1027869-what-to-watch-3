import React from "react";
import {mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  videoSrc: `somePath`,
  posterSrc: `somePath`
};

it (`Should video player change state with different isPlaying props`, ()=>{

  const {videoSrc, posterSrc} = mock;

  const videoPlayerWrapper = (isPlaying) => {
    return mount(
        <VideoPlayer
          handleMouse={()=>{}}
          isPlaying={isPlaying}
          src={videoSrc}
          poster={posterSrc}
        />
    );
  };
  expect(videoPlayerWrapper(true).state(`isPlaying`)).toBe(true);
  expect(videoPlayerWrapper(false).state(`isPlaying`)).toBe(false);
});

