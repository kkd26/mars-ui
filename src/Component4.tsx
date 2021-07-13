import React, { useContext } from "react";
import { ColorOnCount } from "./ColorOnCount";
import { context } from "./Component1";
import { getHSLFromCount } from "./utils";

export default function Component4() {
  const { count } = useContext(context);

  return (
    <div>
      <ColorOnCount color={getHSLFromCount(count)}>{count}</ColorOnCount>
    </div>
  );
}
