import React from "react";
import { useRef ,useEffect} from "react";
import { useState } from "react";
import "./Timer.css"
export const Timer = () => {
//   const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [sec, setSec] = useState(0);

  const timerRef = useRef(null);
  // currentRef.current=null


  
  // start......
  const handleStart = () => {
    timerRef.current = setInterval(() => {
  setSec((pres)=>{
    if(pres === 59){
        setMin((prem)=>{
            if(prem === 59){
                setHour((preh)=>{
                    return preh +1
                });
                return 0;
                
            }
            return prem +1
            
        })
        return 0;
    }
    return pres +1
  })
//   clearInterval(timerRef.current)
    }, 1000);
  };

  // for push...........
  const handlePush = () => {
    if(timerRef.current){
        clearInterval(timerRef.current) ;
        timerRef.current=null
    }
  };

  useEffect(() => {
    return handlePush
  }, [])

  // for reset function ...
  const handleReset = () => {
    setMin(0)
    setHour(0);
    setSec(0)
  };
  return (
<>
<h1>✨✨_GoOgLe_TiMeR_✨✨</h1>
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
    <button  onClick={handleStart}>
      Start
    </button>
    <button  onClick={handlePush}>
      Push
    </button>
    <button  onClick={handleReset}>
    Reset
    </button>
  </div>
  <div></div>
</div>
</>
);
};