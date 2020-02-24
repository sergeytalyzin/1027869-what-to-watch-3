import React from "react";
import PropTypes from "prop-types";


const SmallMovieCard = (props) => {
  const {handleMouseEnter, onTitleClick} = props;
  return (
    <article onMouseEnter={()=> handleMouseEnter(props.film.title)} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src = {props.film.src} alt="We need to talk about Kevin" width="280"
          height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a onClick = {()=>onTitleClick(props.film.id)} className="small-movie-card__link" href="movie-page.html">{props.film.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default SmallMovieCard;