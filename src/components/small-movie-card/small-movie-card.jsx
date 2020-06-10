import React from "react";
import PropTypes from "prop-types";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";
import history from "../../history.js";
import {AppRoute} from "../../const.js";

const VideoPlayer = withVideo(MovieVideoPlayer);
let timer;

const SmallMovieCard = (props) => {
  const {onActiveFilm, film, active, handleClickItem} = props;
  const {posterBig, previewVideoLink, title, id} = film;

  return (
    <article
      onClick = {(e)=>{
        e.preventDefault();
        clearTimeout(timer);
        onActiveFilm(film);
        history.push(`${AppRoute.MOVIE_PAGE}/${id}`);
      }}
      onMouseEnter={()=>{
        timer = setTimeout(()=>{
          handleClickItem(film);
        }, 1000);
      }}
      onMouseLeave={()=>{
        clearTimeout(timer);
        handleClickItem({});
      }}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <VideoPlayer
          isPlaying={active === film}
          videoSrc={previewVideoLink}
          posterSrc={posterBig}
          widthAtr={280}
          heightAtr={175}
          isMuted
          type={`trailer`}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">{title}</a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  onActiveFilm: PropTypes.func,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    posterBig: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  active: PropTypes.object.isRequired,
  handleClickItem: PropTypes.func.isRequired,
  onExitFilmButtonClick: PropTypes.func,
};


