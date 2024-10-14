import React, { FC, useEffect, useState } from "react";
const PaginationNew: FC<{getMinValue: (num: number) => void, length: number, getMaxValue: (num: number) => void}> = ({getMinValue, getMaxValue, length}) =>
  {
    console.log('rerender2!')
    const [currentElement, setCurrent] = useState(0);
    const totalJSX = Math.floor(length/12) 
    let value = 1;
    let array: number[] = [1]
       
         
           
            for (let i = 0; i < totalJSX; i++)
            {
                value++;
                array.push(value)
            }
        
    const checkedPage = (index: number) => {
        if (index === currentElement)
        {
            return 'pagination-current'
        }
        else
        {
            return 'pagination-uncurrent'
        }
    }        
       
    
    return (
      <div className="pagination-element">
        {array.map((el, index) => <button onClick={() => {getMinValue(index * 12); getMaxValue(el * 12); setCurrent(index)}} className={checkedPage(index)}>{el}</button>)}
      </div>
    )
  }

  export default PaginationNew;