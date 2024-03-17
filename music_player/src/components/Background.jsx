import React from 'react';
import musicbackground from '../video/musicbackground.mp4';

function Background() {
  return (
    <div className="video-container">
      <video
        loop
        muted
        autoPlay     style={{height:"695px",width:"100%",objectFit:"cover",position:"absolute",top:"0px",zIndex:"-1"}}            >
        <source src={musicbackground} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;

