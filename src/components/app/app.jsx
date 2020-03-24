import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveTab from "../../hocs/with-tabs/with-tabs.js";
import {connect} from "react-redux";
import withActiveGenreList from "../../hocs/with-genre-list/with-genre-list.js";
import {ActionCreator} from "../../reducer";

const MoviePageWrapper = withActiveTab(MoviePage);
const MainWrapper = withActiveGenreList(Main);

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
        <MoviePageWrapper
          film = {film}
          films = {this.props.films}
          onTitleClick={this._handleTitleClick}
        />);
    }
    return (
      <MainWrapper
        onTitleClick={this._handleTitleClick}
        films={this.props.films}
        onChangeGenre={this.props.onChangeGenre}
        onGenreClick={this.props.onGenreClick}
        allListFilms={this.props.allListFilms}
      />);
  }
  render() {
    const film = this.state;
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/moviePage">
          <MoviePageWrapper
            film={film}
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
};


const mapStateToProps = (state) => ({
  films: state.listFilms,
});
const mapStateToDispatch = (dispatch) =>({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onClickShowMore() {
    dispatch(ActionCreator.incrementShowed());
  },
  onChangeGenre() {
    dispatch(ActionCreator.resetShowed());
  }
});

export {App};

export default connect(mapStateToProps, mapStateToDispatch)(App);
