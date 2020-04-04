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
import {getFilmActive, getFilmToWatch} from "../../reducer/app-status/selectors.js";
import {getFilmsToRender, getAllFilms, getPromoFilm} from "../../reducer/data/selectors.js";


const VideoPlayer = withVideo(MovieVideoPlayer);


const MoviePageWrapper = withActiveTab(MoviePage);


class App extends PureComponent {
  _renderApp() {
    if (this.props.filmToWatch) {
      return (
        <VideoPlayer
          type={`movie`}
          className={`player__video`}
          isPlaying={false}
          videoSrc={this.props.filmToWatch.previewVideoLink}
          posterSrc={this.props.filmToWatch.src}
          onExitFilmButtonClick = {this.props.onFilmToWatchClick}
          isMuted
        />
      );
    }
    if (this.props.activeFilm) {
      return (
        <MoviePageWrapper
          onFilmWatch={this.props.onFilmToWatchClick}
          film = {this.props.activeFilm}
          films = {this.props.films}
          onActiveFilm={this.props.onActiveFilmClick}
        />);
    }
    return (
      <Main
        films={this.props.filmsToRender}
        promoFilm={this.props.film}
        onFilmWatch={this.props.onFilmToWatchClick}
      />);
  }
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/moviePage">
          <MoviePageWrapper
            film={this.props.activeFilm}
            films={this.props.films}
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
  filmsToRender: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
  activeFilm: PropTypes.any,
  filmToWatch: PropTypes.any,
  onActiveFilmClick: PropTypes.func,
  onFilmToWatchClick: PropTypes.func,
};


const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  film: getPromoFilm(state),
  filmsToRender: getFilmsToRender(state),
  activeFilm: getFilmActive(state),
  filmToWatch: getFilmToWatch(state),
});

const mapStateToDispatch = (dispatch) =>({
  onActiveFilmClick(film) {
    dispatch(ActionCreator.activeFilm(film));
  },
  onFilmToWatchClick: (film) => {
    dispatch(ActionCreator.setFilmToWatch(film));
  },
});

export {App};

export default connect(mapStateToProps, mapStateToDispatch)(App);
