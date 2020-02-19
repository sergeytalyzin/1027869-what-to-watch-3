import React, {PureComponent} from "react";
import films from "../../mocks/films.js";
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

  handleMouseEnter(evt, title) {
    this.setState({activeFilm: title});
  }
  getFilms() {
    return films.map(({title, src, id})=>{
      return (
        <SmallMovieCard
          title = {title}
          src = {src}
          key = {id}
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
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
export default MovieList;
