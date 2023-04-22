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
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef();
  console.log("The audio ref is .........", audioRef);

  return (
    <DashboardCard title="Sales Overview">
      <div className="bg-[#d8f2df] rounded-2xl p-4">
        <div className=" max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8  space-y-4 sm:space-y-0 sm:flex-row sm:items-center">
          <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
          <Controls audioRef={audioRef} />
          <ProgressBar />
          <FormInput/>
        </div>
      </div>
    </DashboardCard>
  );
};

export default AudioPlayer;