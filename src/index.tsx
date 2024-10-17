import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import HeaderPin from './components/Header';
import './App.css'
import IdeasPage from './components/IdeasPage';
import Pindata from './components/PinData';
import UserPage from './components/UserPage';
import Description from './components/Description';
import Bussines from './components/Bussines';
import Blog from './components/Blog';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const routers = createBrowserRouter([
{
  path: '',
  element: <HomePage/>
},
{
  path: '/ideas',
  element: <IdeasPage/>
},
{
  path: '/pin/:id',
  element: <Pindata/>
},
{
  path: '/:userId',
  element: <UserPage/>
},
{
  path: '/all-about',
  element: <Description/>
},
{
  path: '/bussines',
  element: <Bussines/>
},
{
  path: '/news',
  element: <Blog/>
}
])
root.render(
  <RouterProvider router={routers}/>
);

