import React, { FC, useRef, useState } from "react";
import HeaderPin from "./Header";
import ModalWindowLogin from "./ModalWindowLogin";
import ChangedHeader from "./ChangedHeader";
import Circle from "./Circle";
import CircleList from "./CircleList";
import ModalWindowRegistration from "./ModalWindowRegistration";
import logo from '../images/logo.png'
import ImageAnimation from "./ImageAnimation";

const HomePage = () =>
  {
    const [current, setCurrent] = useState(0)
    const [modal, setModal] = useState(false)
    const [modalReg, setModalReg] = useState(false)
    const getCurrent = (id: number) => {
        setCurrent(id);
    }
    const getBooly = (value: boolean) => {
      setModal(value);
    }
    const getBooly2 = (value: boolean) => {
      setModalReg(value);
    }
    const calculateBlackout = (modal: boolean) =>
    {
        if (modal)
        {
          return 'home-page blackout-homepage'
        }
        else
        {
          return 'home-page'
        }
    }
   
    const arrayText = ['идея блюд на ужин', 'идея домашнего декора', 'идея стильного образа', 'идея садоводов']
    return (
      <div id="lol" onClick={() => {setModal(false); setModalReg(false)}} className={calculateBlackout(modal || modalReg)}>
        <HeaderPin getBool2={getBooly2} getBool={getBooly} logo={logo} name="Collage"/>
        {modal ? <ModalWindowLogin onClick={(e) => {e.stopPropagation()}} name="Collage"/> : modalReg && <ModalWindowRegistration onClick={(e) => {e.stopPropagation()}}/>}
       <ChangedHeader keyX={current} array={arrayText}/>
        <CircleList getdata={getCurrent}/>
        <ImageAnimation index={current}/>
        
        
        
      </div>
    )
  }

  export default HomePage;