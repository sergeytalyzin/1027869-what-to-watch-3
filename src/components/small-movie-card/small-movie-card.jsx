import React from "react";
import PropTypes from "prop-types";


const SmallMovieCard = (props) => {
  const {onTitleClick, renderPlayer} = props;
  return (
    <article
      onClick = {()=>onTitleClick(props.film.id)}
      className="small-movie-card catalog__movies-card">

      {renderPlayer(props.film.previewVideoLink, props.film.src, props.film.id)}

      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{props.film.title}</a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};


