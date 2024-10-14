import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import HeaderPin from './components/Header';
import './App.css'
import IdeasPage from './components/IdeasPage';
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
}
])
root.render(
  <RouterProvider router={routers}/>
);

