import React, {PureComponent} from "react";
import VideoPlayer from "../../components/video-player/video-player.jsx";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: -1,
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseOut = this._handleMouseOut.bind(this);
    }

    _handleMouseEnter(id) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(()=>{
        this.setState({
          active: id
        });
      }, 1000);
    }

    _handleMouseOut() {
      this.setState(()=>({
        active: -1
      }));
      clearTimeout(this.timeOut);
    }

    render() {
      const {active} = this.state;
      return <Component
        {...this.props}
        renderPlayer= {(src, poster, id) => {
          return (
            <VideoPlayer
              src={src}
              poster={poster}
              isPlaying={id === active}
              handleMouseEnter={() =>  this._handleMouseEnter(id)}
              handleMouseOut={() => this._handleMouseOut(id)}
            />
          );
        }}
      />;
    }
    componentWillUnmount() {
      clearTimeout(this.timeOut);
    }
  }

  WithActivePlayer.propTypes = {};
  return WithActivePlayer;
};

export default withActivePlayer;


