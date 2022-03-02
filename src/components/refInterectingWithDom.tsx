import { useState, useRef } from "react";
import InputModal from "./InputModal";

export default function RefInterectingWithDom() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function showFakeModal() {
    setShowModal(!showModal);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <h1>useRef to interect with DOM elements</h1>
      <button onClick={showFakeModal}>
        Click here to inform your e-mail and don't miss any news
      </button>
      &nbsp;
      {showModal && <InputModal forwaredRef={inputRef} />}
    </div>
  );
}
