import React from "react";
import AccountShape from "./AccountShape";
import logo from '../images/logo.png'
const UserPage = () =>
  {
    return (
      <div className="user-page">
        <p style={{fontSize: '34px', marginTop: '150px', fontWeight: '500'}}>Страница профиля</p>
        <AccountShape/> 
        <p style={{fontSize: '30px'}}>Max001</p>
        <div className="logo-name">
            <img style={{width: '40px', height: '40px'}} src={logo} alt="" />
            <p style={{color: 'gray', fontSize: '18px'}}>Maxon</p>
        </div>
        <button className="change-profile-button" style={{width: '200px', height: '50px', borderRadius: '30px', border: 'none', background: 'rgb(219,219,219)', fontSize: '18px'}}>Изменить профиль</button>
      </div>
    )
  }

  export default UserPage;