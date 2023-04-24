import React, { useState, useRef } from "react";
import DashboardCard from "../shared/DashboardCard";
import dynamic from "next/dynamic";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "../../data/tracks";
import FormInput from "../subscribe/FormInput";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgresss , setTimeProgresss] = useState(0);
  const [duration ,setDuration] = useState(0);
  const audioRef = useRef();
  const ProgressBarRef = useRef();

  const handleNext = () => {
    if(trackIndex >= tracks.length-1){
      setTrackIndex(0);
      setCurrentTrack(tracks[0])
    } else {
      setTrackIndex((prev: number) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1 ]);
    }
  };



  return (
    <DashboardCard title="Subscribe">
      <div className="bg-[#d8f2df] rounded-2xl p-4">
        <div className=" max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8  space-y-4 sm:space-y-0 sm:flex-row sm:items-center ">
          <DisplayTrack {...{currentTrack,audioRef,setDuration,ProgressBarRef,handleNext}}/>
          <Controls {...{audioRef, ProgressBarRef, duration,setTimeProgresss,tracks,trackIndex,setTrackIndex,setCurrentTrack,handleNext}} />
          <ProgressBar  {...{ProgressBarRef,audioRef,timeProgresss,duration}}/>
          <FormInput/>
        </div>
      </div>
    </DashboardCard>
  );
};

export default AudioPlayer;