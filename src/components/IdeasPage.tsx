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
import ferrari from '../images/ferrari.png'
import PaginationNew from "./PaginationNew";

const IdeasPage = () =>
    {
      const arrays: Array<{pin: string, name: string, category: 'Одежда' | 'Спорт' | 'Автомобили' | 'Техника' | 'Игры' | 'Книги' | 'Развлечения'}[]> = [[{pin: 'https://img.goodfon.ru/wallpaper/big/3/11/badfon-koenigsegg-ccx-supercar-front-7494.webp', name: 'ccx', category: 'Автомобили'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUribWa32dnrVjhp_iiqK0ISUL4IYUDEt0vA&s', name: 'saleen s7', category: 'Автомобили'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHi_lEzBov4R8XC-eZitjgHGTBAroKOaidw&s', name: 'clothes', category: 'Одежда'}, {pin: 'https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2023/January/25/bmw-m3-cs-04.jpg', name: 'BMW', category: 'Автомобили'}, {pin: skyline, name: 'Skyline', category: 'Автомобили'}, {pin: supra, name: 'Supra', category: 'Автомобили'}, {pin: gym, name: 'Gym', category: 'Спорт'}, {pin: ferrari, name: 'Феррари', category: 'Автомобили'} ], 
    [{pin: 'https://img.goodfon.ru/wallpaper/big/3/11/badfon-koenigsegg-ccx-supercar-front-7494.webp', name: 'ccx', category: 'Автомобили'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHi_lEzBov4R8XC-eZitjgHGTBAroKOaidw&s', name: 'clothes', category: 'Одежда'}, {pin: bs, name: 'Brawl Stars', category: 'Игры'}, {pin: forza, name: 'Forza Horizon 5', category: 'Игры'}, {pin: gym, name: 'Gym', category: 'Спорт'}, {pin: entertainment, name: 'Развлечения', category: 'Развлечения'}, {pin: notebook, name: 'Ноутбук', category: 'Техника'}, {pin: ferrari, name: 'Феррари', category: 'Автомобили'}], 
    [{pin: bs, name: 'Brawl Stars', category: 'Игры'}, {pin: 'https://img.goodfon.ru/wallpaper/big/3/11/badfon-koenigsegg-ccx-supercar-front-7494.webp', name: 'ccx', category: 'Автомобили'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHi_lEzBov4R8XC-eZitjgHGTBAroKOaidw&s', name: 'clothes', category: 'Одежда'}, {pin: forza, name: 'Forza Horizon 5', category: 'Игры'}, {pin: entertainment, name: 'Развлечения', category: 'Развлечения'}, {pin: gym, name: 'Gym', category: 'Спорт'}, {pin: ferrari, name: 'Феррари', category: 'Автомобили'}, {pin: notebook, name: 'Ноутбук', category: 'Техника'} ],
    [{pin: bs, name: 'Brawl Stars', category: 'Игры'}, {pin: ferrari, name: 'Феррари', category: 'Автомобили'}, {pin: 'https://img.goodfon.ru/wallpaper/big/3/11/badfon-koenigsegg-ccx-supercar-front-7494.webp', name: 'ccx', category: 'Автомобили'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHi_lEzBov4R8XC-eZitjgHGTBAroKOaidw&s', name: 'clothes', category: 'Одежда'}, {pin: forza, name: 'Forza Horizon 5', category: 'Игры'}, {pin: gym, name: 'Gym', category: 'Спорт'}, {pin: notebook, name: 'Ноутбук', category: 'Техника'}, {pin: entertainment, name: 'Развлечения', category: 'Развлечения'}],
    [{pin: forza, name: 'Forza Horizon 5', category: 'Игры'}, {pin: 'https://img.goodfon.ru/wallpaper/big/3/11/badfon-koenigsegg-ccx-supercar-front-7494.webp', name: 'ccx', category: 'Автомобили'}, {pin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHi_lEzBov4R8XC-eZitjgHGTBAroKOaidw&s', name: 'clothes', category: 'Одежда'}, {pin: bs, name: 'Brawl Stars', category: 'Игры'}, {pin: gym, name: 'Gym', category: 'Спорт'}, {pin: entertainment, name: 'Развлечения', category: 'Развлечения'}, {pin: notebook, name: 'Ноутбук', category: 'Техника'}, {pin: ferrari, name: 'Феррари', category: 'Автомобили'}, {pin: gym, name: 'Качалка', category: 'Спорт'}], 
]
      const options = [{value: 'Одежда', label: 'Одежда'}, {value: 'Спорт', label: 'Спорт'}, {value: 'Автомобили', label: 'Автомобили'}, {value: 'Техника', label: 'Техника'}, {value: 'Игры', label: 'Игры'}, {value: 'Книги', label: 'Книги'}, {value: 'Развлечения', label: 'Развлечения'} ]
      const [dataReq, setDataReq] = useState('');
      const [minimalValue, setMinimalValue] = useState(0) 
      const [maximalValue, setMaximalValue] = useState(7)
      const [category, setCategory] = useState<string | null>(null)
      const getMinimal = (num: number) => {
        setMinimalValue(num);
      }
      const getMaximal = (num: number) => {
        setMaximalValue(num);
      }
      const logicArray = (index: number) => {
        return dataReq === '' && category === null ? arrays[index].slice(minimalValue, maximalValue).map(el => <Pin name={el.name} pin={el.pin}/>) : category != null && dataReq != '' ? arrays[index].filter(el => el.category == category && googleSearch(el.name, dataReq)).map(el => <Pin name={el.name} pin={el.pin}/>) : dataReq !== '' ? arrays[index].filter(el => googleSearch(el.name, dataReq)).map(el => <Pin name={el.name} pin={el.pin}/>) : arrays[index].filter(el => el.category == category).map(el => <Pin name={el.name} pin={el.pin}/>)
      }
        useEffect(() => {
          console.log(category)
        }, [category])
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
          onChange={(e) => setCategory(e)}
    />
        </header>
        <p style={{color: 'black', fontSize: '30px', fontWeight: '500', margin: '30px 0'}}>Просмотрите лучшие результаты в Collage</p>
        <div className="ideas-result">
          <div className="ideas-result-0">
            {logicArray(0)}
          </div>
          <div className="ideas-result-1">
          {logicArray(1)}
          </div>
          <div className="ideas-result-2">
          {logicArray(2)}
          </div>
          <div className="ideas-result-3">
          {logicArray(3)}
          </div>
          <div className="ideas-result-4">
          {logicArray(4)}
          </div>
          
        </div>
        <PaginationNew length={logicArray(0).length} getMaxValue={getMaximal} getMinValue={getMinimal}/>
      </div>
    )
}

export default IdeasPage;