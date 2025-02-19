import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import Viewpaste from './components/Viewpaste';
import{createBrowserRouter, RouterProvider} from 'react-router-dom'

const router= createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
      <Navbar/>
      <Home/>
      </div>
    }, 
    {
      path:"/pastes",
      element:
<div>
      <Navbar/>
      <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
    <div>
      <Navbar/>
      <Viewpaste/>
      </div>
    }
  ]
)
function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
