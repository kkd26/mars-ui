import React, { useState, useEffect } from "react";
import "./ButtonCounter.scss";
import { CounterDiv } from "./CounterDiv";
import { ColorOnCount } from "./ColorOnCount";
import { getHSLFromCount } from "./utils";

const KEY = "click-count";

export default function ButtonCounter() {
  const initCount = Number(window.localStorage.getItem(KEY));

  const [count, setCount] = useState(initCount);

  useEffect(() => {
    window.localStorage.setItem(KEY, count.toString());
  }, [count]);

  function click() {
    setCount((c) => c + 1);
  }

  return (
    <CounterDiv>
      <div>
        Current count:{" "}
        <ColorOnCount color={getHSLFromCount(count)}>{count}</ColorOnCount>
      </div>
      <button onClick={click}>Click me!</button>
    </CounterDiv>
  );
}
