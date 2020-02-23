import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      state: 1
    };
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick() {
    this.setState({
      state: 0,
    });
  }

  _renderApp() {
    const {state} = this.state;

    if (state === 0) {
      return (
        <MoviePage
          films={this.props.films}
        />);
    } else {
      return (
        <Main
          onTitleClick={this._handleTitleClick}
          films={this.props.films}
        />);
    }
  }
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/moviePage">
          <MoviePage
            films={this.props.films}
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
