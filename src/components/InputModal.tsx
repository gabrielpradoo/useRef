import { useEffect } from "react";

export default function InputModal({ forwaredRef }) {
  useEffect(() => {
    forwaredRef.current?.focus();
  }, [forwaredRef]);

  return (
    <div>
      <label htmlFor="email">E-mail</label>
      <br />
      <input ref={forwaredRef} type="email" id="email" />
    </div>
  );
}
