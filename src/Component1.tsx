import React, { useEffect, useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { CounterDiv } from "./CounterDiv";

const KEY = "count";

export interface ContextI {
  count: number;
  click: () => void;
}

const initCount = Number(localStorage.getItem(KEY));

export const context = React.createContext<ContextI>({
  count: initCount,
  click: () => {},
});

const { Provider } = context;

export default function Component1() {
  const initCount = Number(localStorage.getItem(KEY));

  const [count, setCount] = useState(initCount);

  useEffect(() => {
    localStorage.setItem(KEY, count.toString());
  }, [count]);

  function click() {
    setCount((c) => c + 1);
  }

  return (
    <CounterDiv>
      <Provider value={{ click, count }}>
        <Component2 />
        <Component3 />
      </Provider>
    </CounterDiv>
  );
}
