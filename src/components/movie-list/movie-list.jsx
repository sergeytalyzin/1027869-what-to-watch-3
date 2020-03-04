import React, {PureComponent} from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import PropTypes from "prop-types";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }
  getFilms() {
    const films = this.props.films;
    return films.map((it)=>{
      return (
        <SmallMovieCard
          onTitleClick = {this.props.onTitleClick}
          film = {it}
          key = {it.id}
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
  onTitleClick: PropTypes.func.isRequired,
};
export default MovieList;
