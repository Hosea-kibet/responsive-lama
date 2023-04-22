import { useState, useEffect } from 'react';

import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({ audioRef }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="flex justify-between items-center mt-10">
      <div className="flex space-x-4">
        <button className="border-none bg-transparent cursor-pointer" onClick={() => audioRef.current.currentTime -= 10}>
          <IoPlaySkipBackSharp />
        </button>
        <button className="border-none bg-transparent cursor-pointer" onClick={() => audioRef.current.currentTime -= 5}>
          <IoPlayBackSharp />
        </button>
        <button className="border-none bg-transparent cursor-pointer" onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button className="border-none bg-transparent cursor-pointer" onClick={() => audioRef.current.currentTime += 5}>
          <IoPlayForwardSharp />
        </button>
        <button className="border-none bg-transparent cursor-pointer" onClick={() => audioRef.current.currentTime += 10}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;