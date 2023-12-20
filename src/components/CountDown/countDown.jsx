 import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("--");
  const [timerHours, setTimerHours] = useState("--");
  const [timerMinutes, setTimerMinutes] = useState("--");
  const [timerSeconds, setTimerSeconds] = useState("--");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("2024-02-16T18:00:00.000+05:30").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance / 1000) % 60);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    let intervalRef = null;
    startTimer();
    if (interval.current) {
      intervalRef = interval.current;
    }
    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <section id="timer" className="relative lg:mt-8 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center w-full text-white">
          <div className="flex md:flex-col">
            <div className="counter-cell flex flex-col justify-between mb-4 md:mb-0">
              <span className="text-2xl md:text-6xl lg:text-7xl subhead-theme">
                {timerDays}
              </span>
              <div
                className=" w-full text-center p-1.5 md:p-3 md:text-xl rounded-b-lg"
                style={{ backgroundColor: "#1b141c" }}
              >
                <span className="text-sm">Days</span>
              </div>
            </div>
            <div className="divider md:hidden">:</div>
            <span className="hidden md:block  md:text-8xl md:px-2 pt-4">:</span>
            <div className="counter-cell mb-4 md:mb-0">
              <span className="text-2xl md:text-6xl lg:text-7xl subhead-theme">
                {("0" + timerHours).slice(-2)}
              </span>
              <div
                className=" w-full text-center p-1.5 md:p-3 md:text-xl rounded-b-lg"
                style={{ backgroundColor: "#1b141c" }}
              >
                <span className="text-sm">Hours</span>
              </div>
            </div>
            <div className="divider md:hidden">:</div>
            <span className="hidden md:block  md:text-8xl md:px-2 pt-4">:</span>
            <div className="counter-cell mb-4 md:mb-0"
            >
              <span className="text-2xl md:text-6xl lg:text-7xl subhead-theme">
                {("0" + timerMinutes).slice(-2)}
              </span>
              <div
                className=" w-full text-center p-1.5 md:p-3 md:text-xl rounded-b-lg"
                style={{ backgroundColor: "#1b141c" }}
              >
                <span className="text-sm">Minutes</span>
              </div>
            </div>
            <div className="divider md:hidden">:</div>
            <span className="hidden md:block  md:text-8xl md:px-2 pt-4">:</span>
            <div className="counter-cell">
              <span className="text-2xl md:text-6xl lg:text-7xl subhead-theme">
                {("0" + timerSeconds).slice(-2)}
              </span>
              <div
                className=" w-full text-center p-1.5 md:p-3 md:text-xl rounded-b-lg"
                style={{ backgroundColor: "#1b141c" }}
              >
                <span className="text-sm">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
