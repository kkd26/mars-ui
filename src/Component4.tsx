import React, { useContext } from "react";
import { context } from "./Component1";

export default function Component4() {
  const { count } = useContext(context);

  return <div>{count}</div>;
}
