import React, { useState, useRef, useEffect } from "react";
import DashboardCard from "../shared/DashboardCard";
import dynamic from "next/dynamic";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tunes } from "../../data/tracks";
import FormInput from "../subscribe/FormInput";
import axios from "axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AudioPlayer = () => {

  const [listtunes, setListTunes] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(undefined)
  const [showOtpForm, setShowOtpForm] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/list?limit=140&page=1"
      )
      .then((res) => {
        let newTracks = res.data.map((e:any) => {
          // @ts-ignore
          let temp = tunes.find((element) => element.id === e.id);
          // @ts-ignore
          if (temp.file) {
            // @ts-ignore
            e.file = temp.file;
          }
          return e;
        });
        setTracks(newTracks);
        setCurrentTrack(newTracks[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    if (tracks.length > 0) {
      setCurrentTrack(tracks[0]);
    }
  }, [tracks]);


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
    setShowOtpForm(false)
  };

 


  
  
  return (
    <DashboardCard title="Subscribe">
      <div className="bg-[#d8f2df] rounded-2xl p-4">
        <div className=" max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8  space-y-4 sm:space-y-0 sm:flex-row sm:items-center ">
          <DisplayTrack {...{currentTrack,audioRef,setDuration,ProgressBarRef,handleNext}}/>
          <Controls {...{audioRef, ProgressBarRef, duration,setTimeProgresss,tracks,trackIndex,setTrackIndex,setCurrentTrack,handleNext,setShowOtpForm}} />
          <ProgressBar  {...{ProgressBarRef,audioRef,timeProgresss,duration}}/>
          <FormInput {...{currentTrack,showOtpForm,setShowOtpForm}}/>
        </div>
      </div>
    </DashboardCard>
  );
};

export default AudioPlayer;