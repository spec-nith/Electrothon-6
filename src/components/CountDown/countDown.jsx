import React, { useEffect, useRef, useState } from "react";
import "./Count.css";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("--");
  const [timerHours, setTimerHours] = useState("--");
  const [timerMinutes, setTimerMinutes] = useState("--");
  const [timerSeconds, setTimerSeconds] = useState("--");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("2024-03-08T18:00:00.000+05:30").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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
    <section id="timer" className="relative overflow-hidden lg:mt-8 mt-16">
      {/* <div className=" text-white flex justify-center text-xl ">
      Hackathon Begins
      </div> */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center w-full text-white">
          <div className="flex md:items-stretch md:p-10">
          <div className="counter-cell mb-4 md:mb-0">
              <span className=" md:m-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl subhead-theme">
                {timerDays}
              </span>
              <div
                className="con w-full text-center p-1.5  md:text-xl rounded-b-lg"
                style={{ backgroundColor: "#1b141c" }}
              >
                <span className="text-sm">Days</span>
              </div>
            </div>
            <div className="divider">:</div>

            <div className="counter-cell mb-4 md:mb-0">
              <span className=" md:m-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl subhead-theme">
                {("0" + timerHours).slice(-2)}
              </span>
              <div
                className="con w-full text-center p-1.5  md:text-xl rounded-b-lg"
                style={{ backgroundColor: "#1b141c" }}
              >
                <span className="text-sm">Hours</span>
              </div>
            </div>
            <div className="divider ">:</div>
            <div className="counter-cell mb-4 md:mb-0">
              <span className=" md:m-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl subhead-theme">
                {("0" + timerMinutes).slice(-2)}
              </span>
              <div
                className="con w-full text-center p-1.5   md:text-xl rounded-b-lg"
                style={{ backgroundColor: "#1b141c" }}
              >
                <span className="text-sm">Minutes</span>
              </div>
            </div>
            <div className="divider ">:</div>
            <div className="counter-cell">
              <span className=" md:m-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl subhead-theme">
                {("0" + timerSeconds).slice(-2)}
              </span>
              <div
                className="con w-full text-center p-1.5  md:text-xl rounded-b-lg"
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
