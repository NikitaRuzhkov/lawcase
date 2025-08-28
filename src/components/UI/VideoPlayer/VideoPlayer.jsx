import { useRef, useState } from 'react';

import './VideoPlayer.css';

import { videoBut } from '../../../assets/images';

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video-block">
      <video
        className="video"
        src={src}
        ref={videoRef}
        poster={poster}
        onClick={togglePlay}
      />
      {!isPlaying && (
        <button onClick={togglePlay} className="video-button">
          <img src={videoBut} alt="" />
        </button>
      )}
    </div>
  );
};

export { VideoPlayer };
