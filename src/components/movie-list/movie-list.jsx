import React, {PureComponent} from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from "prop-types";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(title) {
    this.setState({activeFilm: title});
  }
  getFilms() {
    const films = this.props.films;
    return films.map((it)=>{
      return (
        <SmallMovieCard
          film = {it}
          key = {it.id}
          handleMouseEnter = {this.handleMouseEnter}
        />
      );
    });
  }

  render() {
    return this.getFilms();
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};
export default MovieList;
