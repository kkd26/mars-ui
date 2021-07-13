import React, { useState, useEffect } from "react";
import "./ButtonCounter.scss";

export default function ButtonCounter() {
  const initCount = Number(window.localStorage.getItem("count"));

  const [count, setCount] = useState(initCount);

  useEffect(() => {
    window.localStorage.setItem("count", count.toString());
  }, [count]);

  function click() {
    setCount((c) => c + 1);
  }

  return (
    <div className="counter">
      <div>Current count: {count}</div>
      <button onClick={click}>Click me!</button>
    </div>
  );
}
