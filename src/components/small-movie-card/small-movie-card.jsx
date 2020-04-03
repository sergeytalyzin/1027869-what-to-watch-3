import React from "react";
import PropTypes from "prop-types";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";

const VideoPlayer = withVideo(MovieVideoPlayer);
let timer;

const SmallMovieCard = (props) => {
  const {onActiveFilm, film, active, handleClickItem} = props;
  const {src, previewVideoLink, title} = film;
  return (
    <article
      onClick = {()=>{
        clearTimeout(timer);
        onActiveFilm(film);
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
          posterSrc={src}
          widthAtr={280}
          heightAtr={175}
          isMuted
          type={`trailer`}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  onActiveFilm: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  active: PropTypes.object.isRequired,
  handleClickItem: PropTypes.func.isRequired,
  onExitFilmButtonClick: PropTypes.func,
};


