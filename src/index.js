import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

let storeTodos = { 
  activeFilter: 'ALL',
  todos: [
    {id: 0, todo:"Fare la spesa", completed: true},
    {id: 1, todo:"Fare i compiti", completed: false},
    {id: 2, todo:"Uscire il cane", completed: false}
  ]
};

const composeEnhancers = composeWithDevTools({});

if(localStorage.getItem('myToDoList')) {
  const currState = JSON.parse(localStorage.getItem('myToDoList'));
  if(currState) {
    storeTodos = currState;
  }
}

/*function logger({getState, dispath}) {
  console.log('middkeware chiamato');
  return function (next) {
    console.log('Prima della chiamata');
    return function (action) {
      console.dir('Azione', action);
      console.dir('Prima della azione', getState);
      let result =  next(action);
      console.dir('Dopo della azione', getState);
      return result;
    }
  }
}

const logger2 = ({getState, dispath}) => next => action => {
  console.dir('Azione2', action);
  let result =  next(action);
  console.log('RESULT2', result)
  return result;  
}*/

const store = createStore(storeReducer, { ...storeTodos}, composeEnhancers(
  applyMiddleware(logger),
));

store.subscribe ( () => {
  const currState = JSON.stringify(store.getState());

  localStorage.setItem('myToDoList', currState);
});

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
