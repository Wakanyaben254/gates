
"use client";
import React, { useEffect, useState } from "react";

const deadline = new Date("2025-07-01T00:00:00");

function getTimeRemaining() {
  const now = new Date();
  const total = Date.UTC(
    deadline.getUTCFullYear(),
    deadline.getUTCMonth(),
    deadline.getUTCDate(),
    deadline.getUTCHours(),
    deadline.getUTCMinutes(),
    deadline.getUTCSeconds()
  ) - Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
}

const GatesDeadline: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  if (timeLeft.total <= 0) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-md text-center font-semibold">
        Application deadline has passed.
      </div>
    );
  }

  return (
    <div className="bg-green-100 text-yellow-800 p-4 rounded-md text-center font-semibold">
      <div>Application closes in:</div>
     <div className="mt-2 text-2xl tracking-wide">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default GatesDeadline;

