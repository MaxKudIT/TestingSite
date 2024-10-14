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
      <Link to={'/'} className="pin-object">
        <p style={{fontWeight: '500', fontSize: '30px', paddingBottom: '10px'}}>{name}</p>
        <img className="pin-image" style={{width: '85%', height: '60%', minHeight: '250px', borderRadius: '25px', border: '1px solid rgb(0, 0, 0, 0.2)', backgroundSize: 'cover'}} src={pin} alt=""/>
      </Link>
      </>
    )
  }

  export default Pin;