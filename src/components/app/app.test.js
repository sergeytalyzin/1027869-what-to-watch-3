import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {App} from "./app.jsx";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../reducer/user/user";

const mockStore = configureStore([]);

const films = [
  {
    id: 1,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 3,
    ratingLevel: `Very good`,
    ratingCount: 111,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `Frank Sinatra`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
  {
    id: 2,
    title: `Mindhunter`,
    src: `somePath`,
    genre: `Comedy`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: 3,
    ratingLevel: `Very good`,
    ratingCount: 111,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
    director: `Frank Sinatra`,
    previewVideoLink: `somePath`,
    runTime: `1h 30m`,
  },
];
const film = {
  id: 8,
  title: `Mindhunter`,
  src: `img/mindhunter.jpg`,
  genre: `Comedy`,
  videoSrc: `Some path`,
  date: 1812,
  posterBig: `img/mindhunter.jpg`,
  rating: 4,
  ratingLevel: `Awesome`,
  ratingCount: 433,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  actors: `Frank Sinatra, John Mason, Anthony Mann, Bred Pitt, Heinz Herald`,
  director: `John Mason`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  bg: ``,
  bgSrc: `somePath`,
};


describe(`App should`, () => {
  it(`Render main screen`, () => {
    const store = mockStore({
      DATA: {
        film,
        films,
      },
      APP_STATUS: {
        genre: `All genres`,
        filmsToShowCount: 8,
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            films={films}
            film={film}
            filmsToRender={films}
            login={() => {}}
            authorizationStatus={AuthorizationStatus.AUTH}
            isLogging={false}
            changeLoggingStatus={() => {}}/>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`render auth screen`, () => {
    const store = mockStore({
      DATA: {
        film,
        films,
      },
      APP_STATUS: {
        genre: `All genres`,
        filmsToShowCount: 8,
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            films={films}
            film={film}
            filmsToRender={films}
            login={() => {}}
            authorizationStatus={AuthorizationStatus.AUTH}
            isLogging={true}
            changeLoggingStatus={() => {}}/>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render movie page screen`, () => {
    const store = mockStore({
      DATA: {
        films,
      },
      APP_STATUS: {
        genre: `All genres`,
        filmsToShowCount: 8,
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            films={films}
            activeFilm={film}
            film={film}
            filmsToRender={films}
            login={() => {}}
            authorizationStatus={AuthorizationStatus.AUTH}
            isLogging={false}
            changeLoggingStatus={() => {}}/>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render movie video player`, () => {
    const store = mockStore({
      DATA: {
        films,
        film
      },
      APP_STATUS: {
        genre: `All genres`,
        filmsToShowCount: 8,
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <App
            filmToWatch={film}
            films={films}
            activeFilm={film}
            film={film}
            filmsToRender={films}
            login={() => {}}
            authorizationStatus={AuthorizationStatus.AUTH}
            isLogging={false}
            changeLoggingStatus={() => {}}/>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
