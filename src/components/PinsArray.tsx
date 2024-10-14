import React, { FC } from "react";
import Pin, { PinProps } from "./Pin";
const PinsArray: FC<{array: PinProps[]}> = ({array}) =>
  {
    return (
    <>
    {array.map((el, key) => <Pin key={key} name={el.name} pin={el.pin}/>)}
    </>
    )
  }

  export default PinsArray;