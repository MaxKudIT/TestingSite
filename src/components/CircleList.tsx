import React, { FC, useEffect, useState } from "react";
import Circle from "./Circle";
const CircleList: FC<{getdata: (id: number) => void}> = ({getdata}) =>
  {
const arrayCircle = ['#0659a2', '#3b8805', '#967105', '#b33306']
    const [current, setCurrent] = useState(0);
    let pizdec = 1;
    const checkedCircle = (key: number) =>
    {
        if (key === current)
        {
            getdata(current);
            return arrayCircle[key];
        }
        else
        {
            return 'rgba( 165, 165, 165, 0.4)';
        }
    }
    useEffect(() => {
        setInterval(() => {
            if (pizdec === arrayCircle.length)
            {
                pizdec = 0;
            }
            setCurrent(pizdec)
            pizdec++;
        }, 6000)
    }, [])
    return (
     <div style={{width: '150px', height: '25px', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
        {arrayCircle.map((_, key) => <Circle key={key} color={checkedCircle(key)}/>)}
     </div>
      
    )
  }

  export default CircleList ;