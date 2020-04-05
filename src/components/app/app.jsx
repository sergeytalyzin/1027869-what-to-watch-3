import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveTab from "../../hocs/with-tabs/with-tabs.js";
import {connect} from "react-redux";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import {getFilmActive, getFilmToWatch, getLoggingStatus} from "../../reducer/app-status/selectors.js";
import {getFilmsToRender, getAllFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";

const VideoPlayer = withVideo(MovieVideoPlayer);


const MoviePageWrapper = withActiveTab(MoviePage);


class App extends PureComponent {

  _renderApp() {
    const {
      filmToWatch,
      onFilmToWatchClick,
      activeFilm, films,
      onActiveFilmClick,
      filmsToRender,
      film,
      isLogging,
      authorizationStatus,
      login,
      changeLoggingStatus
    } = this.props;
    if (filmToWatch) {
      return (
        <VideoPlayer
          type={`movie`}
          className={`player__video`}
          isPlaying={false}
          videoSrc={filmToWatch.videoLink}
          posterSrc={filmToWatch.src}
          onExitFilmButtonClick = {onFilmToWatchClick}
          isMuted
        />
      );
    }
    if (activeFilm) {
      return (
        <MoviePageWrapper
          onFilmWatch={onFilmToWatchClick}
          film = {activeFilm}
          films = {films}
          onActiveFilm={onActiveFilmClick}
          authorizationStatus={authorizationStatus}
        />);
    }
    if (isLogging) {
      return (
        <SignIn
          onSubmit={login}
        />);
    }

    return (
      <Main
        onSignInClick={changeLoggingStatus}
        films={filmsToRender}
        promoFilm={film}
        onFilmWatch={onFilmToWatchClick}
        authorizationStatus={authorizationStatus}
      />);
  }
  render() {
    const {activeFilm, films} = this.props;
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/moviePage">
          <MoviePageWrapper
            film={activeFilm}
            films={films}
            onTitleClick={()=>{}}
          />
        </Route>
      </Switch>
    </BrowserRouter>);
  }

}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
  film: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
    videoLink: PropTypes.string,
  }).isRequired,
  filmsToRender: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
  activeFilm: PropTypes.any,
  filmToWatch: PropTypes.any,
  onActiveFilmClick: PropTypes.func,
  onFilmToWatchClick: PropTypes.func,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isLogging: PropTypes.bool.isRequired,
  changeLoggingStatus: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  film: getPromoFilm(state),
  filmsToRender: getFilmsToRender(state),
  activeFilm: getFilmActive(state),
  filmToWatch: getFilmToWatch(state),
  isLogging: getLoggingStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapStateToDispatch = (dispatch) =>({
  onActiveFilmClick(film) {
    dispatch(ActionCreator.activeFilm(film));
  },
  onFilmToWatchClick: (film) => {
    dispatch(ActionCreator.setFilmToWatch(film));
  },
  login: (authData) => {
    dispatch(UserOperation.login(authData));
  },
  changeLoggingStatus: () => {
    dispatch(ActionCreator.changeLoggingStatus());
  }
});

export {App};

export default connect(mapStateToProps, mapStateToDispatch)(App);
