import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Merch from './Merch.js'


const MainPage = () => (
<div>
    <header className="App-header">
      <h1 className="App-title">Welcome to etSetera</h1>
    </header>
<div className="menu-and-content-container"> 
  <router>
    <div className="menu-bar-container">
      <div className="menu-bar">
        All
      </div>
      <div className="menu-bar">
        Hats
      </div>
      <div className="menu-bar">
        Footwear
      </div>
      <div className="menu-bar">
        Tops
      </div>
      <div className="menu-bar">
        Pants
      </div>
    </div>
  </router>
  <div className="merch-container">
    <Merch />
  </div>
</div>
</div> 
);
  


export default MainPage;
