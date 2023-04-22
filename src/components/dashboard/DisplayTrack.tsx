import { BsMusicNoteBeamed } from 'react-icons/bs';
import styled from 'styled-components';

const DisplayTrack = ({ currentTrack, audioRef }: any) => {
  return (
    <div>
      <audio src={currentTrack && currentTrack.src} ref={audioRef} />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 sm:col-span-4">
          <div className="relative pb-full">
            <div className="absolute w-full h-full rounded-lg bg-gray-400 flex items-center mt-6">
              <BsMusicNoteBeamed className="text-4xl text-white hidden sm:block" />
              {/* ^ added "hidden sm:block" to hide on small screens */}
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-8">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl font-bold mb-2">{currentTrack.title}</h2>
            <p className="text-gray-500">{currentTrack.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTrack;
