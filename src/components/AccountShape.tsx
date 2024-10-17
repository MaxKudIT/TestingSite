import React from "react";
import defaultImg from '../image-account/defaultProfile.png'
const AccountShape = () =>
  {
    return (
      <div className="header-account-style-big">
         <img style={{width: '100%', height: '100%'}} src={defaultImg} alt="" />
      </div>
    )
  }

  export default AccountShape;