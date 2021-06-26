import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import storeReducer from './reducers/index'
import {Provider} from 'react-redux'

let storeTodos = { 
  todos: [
    {id: 0, todo:"Fare la spesa", completed: true},
    {id: 1, todo:"Fare i compiti", completed: false},
    {id: 2, todo:"Uscire il cane", completed: false}
  ]
};

const store = createStore(storeReducer, {todos: [...storeTodos.todos]});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
