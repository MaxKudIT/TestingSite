import React, { useEffect, useState } from "react";
import { FieldType } from "./ModalWindowLogin";
import { FaSearch } from "react-icons/fa";
import Pin from "./Pin";
import PinsArray from "./PinsArray";
import { googleSearch } from "../searchGoogle";
import Logotype from "./Logotype";
import { Pagination, Select } from "antd";
import skyline from '../images/skyline.png'
import supra from '../images/supra.png'
import bs from '../images/bs.png'
import gym from '../images/gym.png'
import forza from '../images/forza.png'
import entertainment from '../images/entertainment.png'
import notebook from '../images/notebook.png'
import runners from '../images/runners.png'
import sport from '../images/sport.png'
import PaginationNew from "./PaginationNew";
const IdeasPage = () =>
{
  const arrayPins = [{pin: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-CD-j5SqeZr-_8vxhdd_K6-tGAIpTEEwLQ&s", name: 'Food1'}, {pin: 'https://img.goodfon.ru/wallpaper/big/3/11/badfon-koenigsegg-ccx-supercar-front-7494.webp', name: 'ccx'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUribWa32dnrVjhp_iiqK0ISUL4IYUDEt0vA&s', name: 'saleen s7'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHi_lEzBov4R8XC-eZitjgHGTBAroKOaidw&s', name: 'clothes'}, {pin: 'https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2023/January/25/bmw-m3-cs-04.jpg', name: 'BMW'}, {pin: skyline, name: 'Skyline'}, {pin: supra, name: 'Supra'}, {pin: bs, name: 'Brawl Stars'}, {pin: forza, name: 'Forza Horizon 5'}, {pin: gym, name: 'Gym'}, {pin: sport, name: 'Спорт'}, {pin: entertainment, name: 'Развлечения'}, {pin: notebook, name: 'Ноутбук'} ]
    console.log('rerender!')
    const options = [{value: 'clothes', label: 'Одежда'}, {value: 'sport', label: 'Спорт'}, {value: 'cars', label: 'Автомобили'}, {value: 'fashion', label: 'Мода'}, {value: 'technique', label: 'Техника'}, {value: 'games', label: 'Игры'}, {value: 'books', label: 'Книги'}, {value: 'entertainment', label: 'Развлечения'} ]
    const [dataReq, setDataReq] = useState('');
    const [minimalValue, setMinimalValue] = useState(0) 
    const [maximalValue, setMaximalValue] = useState(12) 
    const getMinimal = (num: number) => {
      setMinimalValue(num);
    }
    const getMaximal = (num: number) => {
      setMaximalValue(num);
    }
    return (
      <div className="ideas-page">
        <header id="header-ideas-page">
          <Logotype/>
          <div className="wrapper-input-ideas">
            <FaSearch style={{position: 'absolute', transform: 'translate(5px, 13px)', fontSize: '20px'}}/>
          <input onChange={(e) => setDataReq(e.target.value)} placeholder="Идеи простых блюд на ужин, костюмы, одежда и прочее"  className="input-ideas"/>
          </div>
          <Select
          className="ideas-header-selector"
          showSearch
          placeholder="Выберите категорию"
          optionFilterProp="label"
          options={options}
    />
        </header>
        <p style={{color: 'black', fontSize: '30px', fontWeight: '500', margin: '30px 0'}}>Просмотрите лучшие результаты в Collage</p>
        <div className="ideas-result">
        {dataReq === '' ? arrayPins.slice(minimalValue, maximalValue).map(el => <Pin name={el.name} pin={el.pin}/>) : arrayPins.filter(el => googleSearch(el.name, dataReq)).map(el => <Pin name={el.name} pin={el.pin}/>)}
        </div>
        <PaginationNew length={arrayPins.length} getMaxValue={getMaximal} getMinValue={getMinimal}/>
      </div>
    )
}

export default IdeasPage;