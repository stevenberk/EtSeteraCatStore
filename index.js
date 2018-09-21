import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


let reducer = (oldState, action) =>{
    if (reducers[action.type]){
        reducers[action.type](oldState,action)
    }
    return oldState;
}

let addItemToCart = (oldState, action) =>{
    let newCartItems = oldState.cartItems.concat([action.item]);
    return {...oldState, cartItems: newCartItems}
};
let reducers = {
    'ADD_TO_CART': addItemToCart
};

let initialState = {
    cartItems : []
}


let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  let app =
  <Provider store={store}>
    <App />
  </Provider>
  ;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
