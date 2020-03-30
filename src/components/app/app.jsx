import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveTab from "../../hocs/with-tabs/with-tabs.js";
import {connect} from "react-redux";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";

const VideoPlayer = withVideo(MovieVideoPlayer);


const MoviePageWrapper = withActiveTab(MoviePage);


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const [currentFilm] = this.props.films.filter((it)=>it.id === this.props.active);
    if (this.props.active !== 0) {
      return (
        <MoviePageWrapper
          film = {currentFilm}
          films = {this.props.films}
          onTitleClick={this.props.handleClickItem}
        />);
    }
    return (
      <Main
        onTitleClick={this.props.handleClickItem}
        films={this.props.films}
      />);
  }
  render() {
    const [currentFilm] = this.props.films.filter((it)=>it.id === this.props.active);
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/moviePage">
          <MoviePageWrapper
            film={currentFilm}
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
  handleClickItem: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired
};


const mapStateToProps = (state) => ({
  films: state.listFilms,
});

export {App};

export default connect(mapStateToProps)(App);
