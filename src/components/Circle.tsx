import React, { FC } from "react";
const Circle: FC<{color: string | number | undefined}> = ({color}) =>
  {
    return (
        <div style={{background: color, width: '15px', height: '15px', borderRadius: '50%'}}></div>
    )
  }

  export default Circle;