import { BsMusicNoteBeamed } from "react-icons/bs";
import styled from "styled-components";

const DisplayTrack = ({ currentTrack, audioRef,setDuration,ProgressBarRef ,handleNext}: any) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    ProgressBarRef.current.max = seconds;
  };
  return (
    <div>
      <audio 
         src={currentTrack && currentTrack.src}
         ref={audioRef}
         onLoadedMetadata={onLoadedMetadata}
         onEnded={handleNext}
       />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 sm:col-span-4">
          <div className="pb-full relative">
            <div className="absolute mt-6 flex h-full w-full items-center rounded-lg bg-gray-400">
              <BsMusicNoteBeamed className="hidden text-4xl text-white sm:block" />
              {/* ^ added "hidden sm:block" to hide on small screens */}
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-8">
          <div className="flex h-full flex-col justify-center">
            <h2 className="mb-2 text-2xl font-bold">{currentTrack.title}</h2>
            <p className="text-gray-500">{currentTrack.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTrack;
