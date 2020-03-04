import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }
  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    video.src = src;
    video.muted = true;
    video.play();
  }

  render() {
    return (
      <video className="player__video" ref={this._videoRef} poster="img/player-poster.jpg"/>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};
