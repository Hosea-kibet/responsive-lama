import { Global, css } from '@emotion/react';

const globalStyles = css`
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 9999px;
    border: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    background-color: #f50;
    border: none;
    border-radius: 50%;
    margin-top: -6px;
  }
  input[type="range"] {
    --range-progress: 0%;
  }
  input[type="range"]::-webkit-slider-runnable-track:before {
    content: "";
    position: absolute;
    background-color: #f50;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 9999px;
    width: var(--range-progress);
  }
`;

const ProgressBar = ({ProgressBarRef,audioRef,timeProgresss,duration}: any) => {
const handleProgressChange = () => {
  console.log(ProgressBarRef.current.value);
  audioRef.current.currentTime = ProgressBarRef.current.value;
};
const formatTime = (time: number) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes =
      minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds =
      seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};
  return (
    <div className="relative w-full flex justify-between mt-12">
    <input
      type="range"
      css={css`
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: 9999px;
        border: none;
      `}
      className="w-full h-1 bg-gray-300 rounded-full appearance-none"
      // @ts-ignore
      style={{'--range-progress': '50%'}}
      ref = {ProgressBarRef}
      defaultValue="0"
      onChange={handleProgressChange}
    />
    {/* <span className="absolute left-0 text-xs text-gray-500" style={{position: 'absolute', left: 0}}>{formatTime(timeProgresss)}</span> */}
    {/* <span className="absolute right-0 text-xs text-gray-500" style={{position: 'absolute', right: 0}}>{formatTime(duration)}</span> */}
    <Global styles={globalStyles} />
  </div>
  );
};

export default ProgressBar;
