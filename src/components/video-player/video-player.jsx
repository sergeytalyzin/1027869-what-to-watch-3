import PropTypes from "prop-types";
import React, {createRef, PureComponent} from "react";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();

    this.state = {
      isPlaying: this.props.isPlaying
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    video.src = src;
    video.muted = true;
    video.onplay = () => {
      this.setState({isPlaying: true});
    };
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    this.setState({isPlaying}, () => {
      if (isPlaying) {
        video.play();
      } else {
        video.load();
      }
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.scr = ``;
    video.onplay = null;
    video.muted = false;
  }

  render() {
    const {handleMouseEnter, handleMouseOut, poster, src} = this.props;
    return (
      <div className="small-movie-card__image"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseOut}
      >
        <video className="player__video" ref={this._videoRef} src={src} poster={`${poster}`}/>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired
};
