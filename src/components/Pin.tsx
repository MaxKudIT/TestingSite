import React, { FC } from "react";
import { Link } from "react-router-dom";
export interface PinProps
{
    pin: string;
    name: string;
}
const Pin: FC<PinProps> = ({pin, name}) =>
{
    return (
      <>
      <Link to={'/pin/:id'} className="pin-object" >
        <img className="pin-image" style={{width: '250px', borderRadius: '25px', border: '1px solid rgb(0, 0, 0, 0.2)', backgroundSize: 'cover', height: 'auto'}} src={pin} alt=""/>
      </Link>
      </>
    )
  }

  export default Pin;