import './App.css';
import React, { Component } from 'react';
import Header from './components/header'
import MyToDoList from './containers/mytodolist';
import AddNewTodo from './containers/addnew'
import TodoFooterContainers from './containers/todoFooterContainers';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <AddNewTodo />
          <MyToDoList />
          <TodoFooterContainers />
        </div>
      </div>
    );
  }
}

export default App;
