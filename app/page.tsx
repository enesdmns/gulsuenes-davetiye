"use client";

import { useState } from "react";

import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Invitation from "../components/Invitation";
import Event from "../components/Event";
import Map from "../components/Map";
import Calendar from "../components/Calendar";

import MusicPlayer from "../components/MusicPlayer";
import WelcomeScreen from "../components/WelcomeScreen";

export default function Home() {
  const [startMusic, setStartMusic] = useState(false);

  return (
    <>
      <WelcomeScreen onStart={() => setStartMusic(true)} />

      <MusicPlayer start={startMusic} />

      <Hero />
      <Countdown />
      <Invitation />
      <Event />
      <Map />
      <Calendar />
    </>
  );
}