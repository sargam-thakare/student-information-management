import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from './component/ind';
import {Provider} from 'react-redux';
import {createStore,combineReducers } from 'redux';
 import CounterReducer from './reducer/CounterReducer'
 import StudentAll from './component/StudentAll';
 import {useSelector} from 'react-redux';

 

//CREATING STORE FOR STATE MANAGEMENT
const store=createStore(  allReducers, 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
     
ReactDOM.render(
   <React.StrictMode>

   {/* PROVIDER WILL MAKE REDUX STORE AVAILABLE TO ALL COMPONENT */}
 <Provider store={store}>
  <App  />
 </Provider>   
    
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
