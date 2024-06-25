"use client"

import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTime((time) => (time > 0 ? time - 1 : 0));
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(1500);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-6xl font-bold">{formatTime(time)}</div>
      <div className="space-x-4">
        {!isActive && !isPaused ? (
          <button onClick={handleStart} className="btn btn-green">
            Start
          </button>
        ) : isPaused ? (
          <button onClick={handleResume} className="btn btn-blue">
            Resume
          </button>
        ) : (
          <button onClick={handlePause} className="btn btn-yellow">
            Pause
          </button>
        )}
        <button onClick={handleReset} className="btn btn-red">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;