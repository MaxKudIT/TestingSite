import React, { FC, useEffect, useState } from "react";
interface SetText
{
    array: string[],
    keyX: number
}
const ChangedHeader: FC<SetText> = ({array, keyX}) =>
  {
    const arrayText = ['#0659a2', '#3b8805', '#967105', '#b33306']
    return (
     <>
     <p style={{fontSize: '53px', marginTop: '150px'}}>Найдите свежие идеи:</p>
     <p className="p-anim" style={{fontSize: '44px', fontWeight: '500', marginTop: '20px', color: arrayText[keyX]}}>{array.filter((el, key) => key === keyX)}</p>
     </>
    )
  }

  export default ChangedHeader;