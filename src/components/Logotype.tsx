import React from "react";
import logo from '../images/logo.png'
const Logotype = () =>
  {
    return (
      <div style={{width: '100px', height: '30px', display: 'flex', alignItems: 'center', gap: '5px'}}>
        <img style={{marginLeft: '30px', width: '50px', height: '50px'}} src={logo} alt="" />
         <p style={{color: '#11379e', fontSize: '20px', fontWeight: '700'}}>Collage</p>
      </div>
    )
  }

  export default Logotype;