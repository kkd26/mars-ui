import React, { useContext } from "react";
import { context } from "./Component1";

export default function Component2() {
  const { click } = useContext(context);
  return <button onClick={click}>Click me!</button>;
}
