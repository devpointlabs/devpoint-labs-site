import React from 'react';
import styled from 'styled-components'
import VideoCover from 'react-video-cover'
import HeaderText from './HeaderText'

class VideoBackground extends React.Component {
  state = {
      resizeNotifier: () => {},
    }
  render() {
      const videoOptions = {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      };
      const style = {
        width: '150vw',
        height: '150vh',
        position: 'fixed',
        margin: 'auto',
        top: '-25vh',
        left: '-25vw',
        zIndex: -2,
      };

  return (
    <div style={style}>
      <HeaderText />
      <VideoCover
        videoOptions={videoOptions}
        remeasureOnWindowResize
        getResizeNotifier={resizeNotifier => {
          this.setState({
            resizeNotifier,
          });
        }}
      />
    </div>
      );
    }
  }

export default VideoBackground;