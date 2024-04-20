import React, { useEffect, useRef } from "react";
import { Howl } from "howler";
import Stressed from "../assets/Stressed.mp3";
import Unstressed from "../assets/Unstressed.mp3";
import Secondary from "../assets/Secondary.mp3";
import { FaPlay, FaPause } from "react-icons/fa";

function Clock(props) {

  const timeInterval = ((60 / props.tempo) * 1000) / props.selectedOption; //((minute/tempo)* ms) conversion

  const intervalRef = useRef(null);
  const callCountRef = useRef(1);
  const stressCountRef = useRef(1);

  const stress = new Howl({ src: [Stressed] });
  const unstress = new Howl({ src: [Unstressed] });
  const secondary = new Howl({ src: [Secondary] });


  const callback = () => {
    stressCountRef.current+=1;

    if (props.isStressed) {
        
      if (callCountRef.current <= props.beats * props.selectedOption) {
        if (callCountRef.current === 1) {
          stress.play();
          console.log("first");
        } else if (stressCountRef.current % parseInt(props.selectedOption) === 1) {
          secondary.play();
          console.log("second");
        } else {
          unstress.play();
          console.log("click");
        }

        
        callCountRef.current+=1;
      }
    } else {
      if (callCountRef.current % parseInt(props.selectedOption) === 1) {
        secondary.play();
        console.log("second");
      } else {
        unstress.play();
        console.log("click");
      }
      callCountRef.current+=1;
      
    }

    if (callCountRef.current > props.beats * props.selectedOption) {
        callCountRef.current=1;
    }
    if (stressCountRef.current > parseInt(props.selectedOption) * props.beats) {
        stressCountRef.current=1;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      handleToggle();
    }
  };

  const handleToggle = () => {
    props.setIsStarted(!props.isStarted);
    if (!props.isStarted) {
      startClock();
      callback();
    } else {
      stopClock();
    }
  };

  const startClock = () => {
    const intervalId = setInterval(() => {
      callback();
    }, timeInterval);

    intervalRef.current = intervalId;
    console.log("Clock started");
  };

  const stopClock = () => {
    clearInterval(intervalRef.current);
    callCountRef.current=1;
    stressCountRef.current=1;
    console.log("Clock stopped");
  };

  return (
    <button onClick={handleToggle} className="pb-2.5">
      {props.isStarted ? (
        <FaPause style={{ color: "#ED8936" }} />
      ) : (
        <FaPlay style={{ color: "#ED8936" }} />
      )}
    </button>
  );
}

export default Clock;
