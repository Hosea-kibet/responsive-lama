import { useState, useEffect, useRef, useCallback } from "react";

import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

const Controls = ({
  audioRef,
  ProgressBarRef,
  duration,
  setTimeProgresss,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  setShowOtpForm
}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef<number | undefined>();

  const repeat = useCallback(() => {
    console.log("run");
    if(audioRef.current){
      const currentTime = audioRef.current.currentTime;
      setTimeProgresss(currentTime);
      ProgressBarRef.current.value = currentTime;
      ProgressBarRef.current.style.setProperty(
        "--range-progress",
        `${(ProgressBarRef.current.value / duration) * 100}%`
      );
  
      playAnimationRef.current = requestAnimationFrame(repeat);
  
    } else {
      console.error("audioRef.current is null or undefined");
    }
     }, [audioRef, duration, ProgressBarRef, setTimeProgresss]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      if (playAnimationRef.current !== undefined) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat, playAnimationRef]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if(trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev: number) => prev- 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
    setShowOtpForm(false);
  };

  // const handleNext = () => {
  //   if(trackIndex >= tracks.length-1){
  //     setTrackIndex(0);
  //     setCurrentTrack(tracks[0])
  //   } else {
  //     setTrackIndex((prev: number) => prev + 1);
  //     setCurrentTrack(tracks[trackIndex + 1 ]);
  //   }
  // };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div className="mb-2 flex space-x-4 ">
        <button
          className="cursor-pointer border-none bg-transparent"
          onClick={handlePrevious}
        >
          <IoPlaySkipBackSharp />
        </button>
        <button
          className="cursor-pointer border-none bg-transparent"
          onClick={skipBackward}
        >
          <IoPlayBackSharp />
        </button>
        <button
          className="cursor-pointer border-none bg-transparent"
          onClick={togglePlayPause}
        >
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button
          className="cursor-pointer border-none bg-transparent"
          onClick={skipForward}
        >
          <IoPlayForwardSharp />
        </button>
        <button
          className="cursor-pointer border-none bg-transparent"
          onClick={handleNext}
        >
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;
function setShowOtpForm(arg0: boolean) {
  throw new Error("Function not implemented.");
}

