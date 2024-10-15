import React, { FC } from "react";
import clot4 from '../images_for_homepage/clot4.png'
type PinDataPropsForView =
{
    source: string;
    name: string;
    description: string
}
const Pindata: FC = () =>
  {
    return (
      <div className="pin-data-page">
         <img style={{width: '500px', height: '90%'}} src={clot4} alt="" />
         <div style={{width: '500px', height: '90%'}} className="pin-data-full">
            <p style={{fontSize: '32px', fontWeight: '500'}}>Гучи</p>
            <p style={{fontSize: '18px', paddingTop: '50px'}}>Один из популярных брендов одежды, на который мне плевать XD</p>
         </div>
      </div>
    )
  }

  export default Pindata;