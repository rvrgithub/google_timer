
import { useEffect, useState } from "react";
// import { useRef } from "react";
import "./timer.css";
export const Timer = () => {
  const [sec, setSecond] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  var timer = null;
  useEffect(() => {
    timer = setInterval(() => {
      setSecond((preTime) => preTime + 1);
      if (sec === 59) {
        setMin(min + 1);
        setSecond(0);
      }
    }, 10);
    if (min === 59) {
      setHour(hour + 1);
      setMin(0);
      setSecond(0);
    }
    return () => clearInterval(timer);
  });
  const restart = () => {
    setSecond(0);
    setMin(0);
    setHour(0);
  };
  const stop = () => {
    clearInterval(timer);
  };
  const resume = () => {
    // clearInterval(counterRef.current);
  };
  return (
    <div className="timer">
      <div className="timer_contaner">
        <div className="box">
        <div className="time">
          <h1 className={hour == 0 ? "white" : "color"}>
            {hour < 10 ? "0" + hour : hour}:
          </h1>
          <h1 className={min == 0 ? "white" : "color"}>
            {min < 10 ? "0" + min : min}:
          </h1>
          <h1 className={sec == 0 ? "white" : "color"}>
            {sec < 10 ? "0" + sec : sec}
          </h1>
          </div>
          <div className="time text">
            <h1>hr:</h1>
            <h1>min:</h1>
            <h1>sec</h1>
          </div>
        </div>
        <button  onClick={restart}>
          Restart
        </button>
        <button  onClick={stop}>
          Stop
        </button>
        <button  onClick={resume}>
        Resume
        </button>
      </div>
      <div></div>
    </div>
  );
};
