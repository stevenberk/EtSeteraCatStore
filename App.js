import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Merch from './Merch.js';
import Footwear from './Footwear.js';
import NavBar from './NavBar.js';
import Hats from "./Hats.js";
import Tops from "./Tops.js";
import Pants from "./Pants.js";
import Sox from "./Sox.js";
import Cart from "./Cart.js";


const App = () => (
<div>
  <header className="App-header">
    <h1 className="App-title">Cat store</h1>
  </header>
  <div className="menu-and-content-container">
    <HashRouter>
      <div >
        <NavBar />
        <div className="merch-container">
          <Route exact path ="/all" component={AllMerch}/>
          <Route path ="/footwear" component={FootwearDisplay}/>
          <Route path ="/hats" component={HatsDisplay}/>
          <Route path ="/tops" component={TopsDisplay}/>
          <Route path ="/pants" component={PantsDisplay}/>
          <Route path ="/sox" component={SoxDisplay}/>
          <Route path ="/cart" component={CartDisplay}/>
        </div>
      </div>
    </HashRouter>  
  </div> 
</div> 
);
  
const AllMerch = () => (
  <div className="merch">
    <Merch />
  </div>
)
const FootwearDisplay = () => (
  <div className="merch">
    <Footwear />
  </div>
)
const HatsDisplay = () => (
  <div className="merch">
    <Hats />
  </div> 
)
const TopsDisplay = () => (
  <div className="merch">
    <Tops />
  </div> 
)
const PantsDisplay = () => (
  <div className="merch">
    <Pants />
  </div> 
)
const SoxDisplay = () => (
  <div className="merch">
    <Sox />
  </div> 
)
const CartDisplay = () => (
  <div className="merch">
    <Cart />
  </div> 
)

export default App;