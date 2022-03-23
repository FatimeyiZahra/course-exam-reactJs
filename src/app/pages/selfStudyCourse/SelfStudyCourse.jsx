import React, {  useState } from "react";
import VideoPlayer from "react-video-js-player";
const  onVideoEnd=()=> {
  console.log("Video ended");
}
const onVideoTimeUpdate=(duration)=> {
  console.log("Time updated: ", duration);
}

const onPlayerReady=(player)=> {
  console.log("Player is ready: ", player);
  // this.player = player;
}

const onVideoPlay=(duration)=> {
  console.log("Video played at: ", duration);
}

const onVideoPause=(duration)=> {
  console.log("Video paused at: ", duration);
}

const onVideoSeeking=(duration) =>{
  console.log("Video seeking: ", duration);
}

const onVideoSeeked=(from, to)=> {
  console.log(`Video seeked from ${from} to ${to}`);
}

const SelfStudyCourse = () => {
  // player = {};
  const [state, setfirst] = useState( {
    video: {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster: "https://video-react.js.org/assets/poster.png",
    },
  })

    return (
      <div>
        <VideoPlayer
          controls={true}
          src={state.video.src}
          poster={state.video.poster}
          width="720"
          height="420"
          onReady={onPlayerReady}
          onPlay={onVideoPlay}
          onPause={onVideoPause}
          onTimeUpdate={onVideoTimeUpdate}
          onSeeking={onVideoSeeking}
          onSeeked={onVideoSeeked}
          onEnd={onVideoEnd}
        />
      </div>
    );
}
export default SelfStudyCourse;
