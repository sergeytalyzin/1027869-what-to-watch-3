import React, {PureComponent} from "react";
import VideoPlayer from "../../components/video-player/video-player.jsx";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: 0,
      };
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
              handleMouse = {() => {
                this.setState({
                  active: active === id ? -1 : id
                });
              }}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};
  return WithActivePlayer;
};

export default withActivePlayer;


