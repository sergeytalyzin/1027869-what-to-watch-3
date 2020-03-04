import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: null
    };
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(id) {
    const [currentFilm] = this.props.films.filter((it)=>it.id === id);

    this.setState({
      film: currentFilm
    });
  }

  _renderApp() {
    const {film} = this.state;
    if (film) {
      return (
        <MoviePage
          film = {film}
        />);
    }
    return (
      <Main
        onTitleClick={this._handleTitleClick}
        films={this.props.films}
      />);
  }
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/moviePage">
          <MoviePage
            film={this.props.films[1]}
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
};

export default App;
