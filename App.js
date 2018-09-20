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

class CartState extends React.Component{
  
}



const App = () => (
<div>
    <header className="App-header">
      <h1 className="App-title">Welcome Tabby Tienda</h1>
    </header>
<HashRouter>
<div className="menu-and-content-container">
  <NavBar />
  <Route exact path ="/all" component={AllMerch}/>
  <Route path ="/footwear" component={FootwearDisplay}/>
  <Route path ="/hats" component={HatsDisplay}/>
  <Route path ="/tops" component={TopsDisplay}/>
  <Route path ="/pants" component={PantsDisplay}/>
  <Route path ="/sox" component={SoxDisplay}/>
  <Route path ="/cart" component={CartDisplay}/>
</div>
</HashRouter>   
</div> 
);
  
const AllMerch = () => (
  <div className="merch-container">
  <Merch />
  </div>
)
const FootwearDisplay = () => (
  <div className="merch-container">
  <Footwear />
  </div>
)
const HatsDisplay = () => (
  <div className="merch-container">
  <Hats />
  </div> 
)
const TopsDisplay = () => (
  <div className="merch-container">
  <Tops />
  </div> 
)
const PantsDisplay = () => (
  <div className="merch-container">
  <Pants />
  </div> 
)
const SoxDisplay = () => (
  <div className="merch-container">
  <Sox />
  </div> 
)
const CartDisplay = () => (
  <div className="merch-container">
  <Cart />
  </div> 
)

export default App;