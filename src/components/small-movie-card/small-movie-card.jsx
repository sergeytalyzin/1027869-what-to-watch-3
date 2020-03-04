import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";


export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: false,
    };
    this.handleMouse = this.handleMouse.bind(this);
  }

  handleMouse() {
    this.setState({activeFilm: !this.state.activeFilm});
  }

  render() {
    const {onTitleClick} = this.props;

    let timeOut;
    return (
      <article onMouseEnter={()=> {
        timeOut = setTimeout(this.handleMouse, 1000);
      }}
      onMouseLeave={()=> {
        clearTimeout(timeOut);
        this.handleMouse();
      }}
      className="small-movie-card catalog__movies-card">
        {this.state.activeFilm ?
          <VideoPlayer
            src = {this.props.film.previewVideoLink}
          />
          :
          <div onClick = {()=>onTitleClick(this.props.film.id)} className="small-movie-card__image">
            <img src = {this.props.film.src} alt="We need to talk about Kevin" width="280"
              height="175"/>
          </div>
        }
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{this.props.film.title}</a>
        </h3>
      </article>
    );
  }
}


SmallMovieCard.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};


