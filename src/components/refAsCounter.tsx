import { useState, useRef } from "react";

export default function RefAsCounter() {
  const counterRef = useRef(0);

  function increaseCounter() {
    counterRef.current = counterRef.current + 1;
  }

  function showCouter() {
    alert("The button was clicked: " + counterRef.current + " times!");
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "sans-serif",
          width: "50%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>useRef as an alternative to useState</h1>
        <button onClick={increaseCounter}>Click</button>
        &nbsp;
        <button onClick={showCouter}>
          Show how many times the button was clicked
        </button>
      </div>
    </div>
  );
}
