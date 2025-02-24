import React, { useState, useEffect } from "react";
import slideImg2 from "../../assets/img/slider/2.jpg";

const HomeTimeTicker = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = { days: "0", hours: "00", minutes: "00", seconds: "00" };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <section className="timeticker section-padding bg-img bg-fixed"
    style={{ backgroundImage: `url(${slideImg2})` }}
    >
      {timeLeft.days > 0 || timeLeft.hours !== "00" ? (
        <>
          <div className="time-div">{timeLeft.days}d</div>
          <div className="time-div">{timeLeft.hours}h</div>
          <div className="time-div">{timeLeft.minutes}m</div>
          <div className="time-div">{timeLeft.seconds}s</div>
        </>
      ) : (
        <div>🎉 Offer Ended!</div>
      )}
    </section>
  );
};

export default HomeTimeTicker;
