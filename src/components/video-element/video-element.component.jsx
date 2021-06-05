import React from 'react';
import YouTube from 'react-youtube';

import './video-element.styles.scss';

class VideoElement extends React.Component {

    componentDidUpdate(prevProps) {
        if(this.props.elementUrl !== prevProps.elementUrl){ //<---- see here
           this.setState({ elementUrl: this.props.elementUrl});//<---- see here
        }
     }

    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
  
      return (
        <div>
          <YouTube
            className="video"
            videoId={this.props.elementUrl}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      );
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

  export default VideoElement;