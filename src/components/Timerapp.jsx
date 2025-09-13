import React, { useEffect, useState } from 'react';

function Timer() {
  useEffect(() => {
    console.log("Mounted: Timer started");

    const interval = setInterval(() => {
      console.log("Tick...");
    }, 1000);

   
    return () => {
      console.log("Unmounted: Timer stopped");
      clearInterval(interval);
    };
  }, []);

  return <h2>Check console!</h2>;
}

function Timerapp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>useEffect Timer Example</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
      {show && <Timer />}
    </div>
  );
}

export default Timerapp;