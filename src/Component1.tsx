import React, { useState, useEffect } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import "./ButtonCounter.scss";

export interface ContextI {
  count: number;
  click: () => void;
}

const initCount = Number(localStorage.getItem("count"));

export const context = React.createContext<ContextI>({
  count: initCount,
  click: () => {},
});

const { Provider } = context;

export default function Component1() {
  const [count, setCount] = useState(initCount);

  useEffect(() => {
    window.localStorage.setItem("count", count.toString());
  }, [count]);

  function click() {
    setCount((c) => c + 1);
  }

  return (
    <div className="counter">
      <Provider value={{ click, count }}>
        <Component2 />
        <Component3 />
      </Provider>
    </div>
  );
}
