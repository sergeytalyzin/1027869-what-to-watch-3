import React, {PureComponent, createRef, Fragment} from "react";
import PropTypes from "prop-types";

const convertVideoTime = (time) => {
  let seconds;
  let minutes;
  let hours;
  let timeLeft;

  hours = Math.floor(time / 60 / 60);
  timeLeft = time - hours * 60 * 60;

  minutes = Math.floor(timeLeft / 60);
  timeLeft = timeLeft - minutes * 60;

  seconds = timeLeft;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};


class MovieVideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._rootElRef = createRef();
    this._handlerFullScreenChange = this._handlerFullScreenChange.bind(this);
  }

  _handlerFullScreenChange() {
    this.props.onFullScreenButtonClick();
  }

  _renderPlayer() {
    const {children, onPlayFilmButtonClick, progressInPercent, progressInSeconds,
      onPlayButtonClick, isPlaying, title, isFullScreen, type} = this.props;

    switch (type) {
      case `trailer`:
        return (<Fragment>{children}</Fragment>);
      case `movie`:
        return (
          <div ref={this._rootElRef} className="player">
            {children}

            <button type="button" onClick={() => onPlayFilmButtonClick(null)} className="player__exit">Exit</button>

            <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress className="player__progress" value={`${progressInPercent}`} max="100"/>
                  <div className="player__toggler" style={{left: `${progressInPercent}%`}}>Toggler</div>
                </div>
                <div className="player__time-value">{convertVideoTime(progressInSeconds)}</div>
              </div>

              <div className="player__controls-row">
                <button onClick={onPlayButtonClick} type="button" className="player__play">
                  {isPlaying ? (
                    <Fragment>
                      <svg viewBox="0 0 14 21" width="14" height="21">
                        <use xlinkHref="#pause"/>
                      </svg>
                      <span>Pause</span>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"/>
                      </svg>
                      <span>Play</span>
                    </Fragment>
                  )}
                </button>
                <div className="player__name">{title}</div>

                <button onClick={() => {
                  if (isFullScreen) {
                    document.exitFullscreen();
                  } else {
                    this._rootElRef.current.requestFullscreen();
                  }
                }}
                type="button" className="player__full-screen">
                  <svg viewBox="0 0 27 27" width="27" height="27">
                    <use xlinkHref="#full-screen"/>
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          </div>
        );
    }
    return <p>Something went wrong :(</p>;
  }
  componentDidMount() {
    document.addEventListener(
        `fullscreenchange`,
        this._handlerFullScreenChange
    );
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._handlerFullScreenChange);
  }

  render() {
    return this._renderPlayer();
  }
}

MovieVideoPlayer.propTypes = {
  onFullScreenButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  progressInPercent: PropTypes.number.isRequired,
  progressInSeconds: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  title: PropTypes.string,
  isFullScreen: PropTypes.bool.isRequired,
  onPlayFilmButtonClick: PropTypes.func,
  type: PropTypes.oneOf([`trailer`, `movie`]),
};

export default MovieVideoPlayer;
