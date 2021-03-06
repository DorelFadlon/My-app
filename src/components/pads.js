import React, { useState } from "react";

export default function Pads({ pad }) {
  const [Play, setPlay] = useState(false);
  const [Color, setColor] = useState("#ececec");
  const [Active, setActive] = useState([]);

  var loops = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // playAudio() 
  // {
  //   const audioEl = document.getElementsByClassName("audio-element")[0];
  //   audioEl.play();
  // }

  function addToArr(track, i) {
    // if(oldArray.track.Active)
    //   break;
    setActive((oldArray) => [...oldArray, track]);
    console.log(Active);
  }

  function PlayAll() {
    Active.map((x) => x.play());
  }
  function StopAll() {
    Active.map((x) => x.stop());
  }

  return (
    <div>
      <h1>Loop Machine</h1>
      <div style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
        {loops.map((track, i) => (
          <button
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "15px",
              backgroundColor: Color,
            }}
            onClick={() => addToArr(track, i)}
            // onClick={() => track.play()}
          >
            {track}
          </button>
        ))}
      </div>
      <button
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "15px",
          backgroundColor: Color,
        }}
        onClick={() => PlayAll()}
      >
        <img src="" alt="play" />
      </button>

      <button
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "15px",
          backgroundColor: Color,
        }}
        onClick={() => StopAll()}
      >
        <img src="" alt="stop" />
      </button>
    </div>
  );
}
