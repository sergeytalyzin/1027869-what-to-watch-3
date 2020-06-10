import React from "react";
import renderer from "react-test-renderer";
import MovieVideoPlayer from "./movie-video-player.jsx";

const mock = {
  progressInPercent: 0,
  progressInSeconds: 0,
  isPlaying: false,
  title: `Some title`,
  isFullScreen: false,
};

it(`<MovieVideoPlayer /> should render trailer player`, () => {
  const tree = renderer
    .create(
        <MovieVideoPlayer
          {...mock}
          onFullScreenButtonClick={() => {}}
          onPlayButtonClick={() => {}}
          onExitFilmButtonClick={() => {}}
          type={`trailer`}
        >
          <video/>
        </MovieVideoPlayer>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<MovieVideoPlayer /> should render full movie player`, () => {
  const tree = renderer
    .create(
        <MovieVideoPlayer
          {...mock}
          onFullScreenButtonClick={() => {}}
          onPlayButtonClick={() => {}}
          onExitFilmButtonClick={() => {}}
          type={`movie`}
        >
          <video/>
        </MovieVideoPlayer>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
