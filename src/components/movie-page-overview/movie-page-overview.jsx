import React from "react";
import PropTypes from "prop-types";
import {getTextRating} from "../../utils.js";

const MoviePageOverview = (props) => {

  const {rating, ratingCount, ratingLevel, description, actors, director} = props.film;
  return (<React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getTextRating(ratingLevel)}</span>
        <span className="movie-rating__count">{ratingCount}</span>
      </p>
    </div>

    <div className="movie-card__text">
      {description}

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {actors}</strong></p>
    </div>
  </React.Fragment>);
};


MoviePageOverview.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    posterBig: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf.isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
};


export default MoviePageOverview;
