import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Flex } from 'antd';
import Circle from "./Circle";
import Logotype from "./Logotype";
interface HomePageHeaderProps
{
    logo: string,
    name: string;
    getBool: (val: boolean) => void;
    getBool2: (val: boolean) => void;
}
const HeaderPin: FC<HomePageHeaderProps> = ({getBool, getBool2}) =>
  {
   
    const [modalLogin, setModalLogin] = useState<boolean>(false);
    const [modalRegistr, setModalRegistr] = useState<boolean>(false);
    return (
      <div className="header-home-page">
        <div className="first-block-header" style={{height: '100%', minWidth: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25%'}}>
        <Logotype/>
        <Link className="prosmotr-link" to={'/ideas'}>Просмотреть</Link>
        </div>
        <div className="second-block-header"  style={{height: '100%', width: '1200px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <ul>
            <li>
                <Link className="opisanie-link" to={'/all-about'}>Описание</Link>
                <Link className="bisnes-link" to={'/bussines'}>Бизнес</Link>
                <Link className="blog-link" to={'/news'}>Блог</Link>
            </li>
        </ul>
        </div>
        <div className="third-block-header" style={{height: '100%', minWidth: '370px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
        <Button disabled={modalRegistr} onClick={() => {setModalLogin(!modalLogin); getBool(!modalLogin)}} className="button-login" type="primary" style={{minHeight: '35px', width: '35%', height: '35%', background: '#1a45dd', fontWeight: 'bold'}}>
          {modalLogin ? 'Назад' : 'Войти'}
        </Button>
        <Button disabled={modalLogin} onClick={() => {setModalRegistr(!modalRegistr); getBool2(!modalRegistr)}} className="button-registr" type="primary" style={{minHeight: '35px', width: '35%', height: '35%', background: 'rgba( 165, 165, 165, 0.2)', fontWeight: 'bold', color: 'black'}}>
        {modalRegistr ? 'Назад' : 'Регистрация'}
        </Button>
        </div>
      </div>
    )
  }

  export default HeaderPin;