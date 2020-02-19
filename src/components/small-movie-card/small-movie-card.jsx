import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {handleMouseEnter} = props;

  return (
    <article onMouseEnter={(evt)=> handleMouseEnter(evt, props.title)} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={props.src} alt="We need to talk about Kevin" width="280"
          height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{props.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default SmallMovieCard;
