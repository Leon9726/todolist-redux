import './App.css';
import { Component } from 'react';
import { createStore } from 'redux';

let todos = ["Fare la spesa",
"Fare i compiti",
"Uscire il cane"]

function storeReducer(state = {}, action)  {
  return state;
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    const store = createStore(storeReducer, {todos: [...todos]});
    this.setState( {todos: [...store.getState().todos]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TO DO LIST</h1>
        </header>
        <ul>
            {
              this.state.todos.map( (todo,i) => <li key={i}>{todo}</li>)
            }
          </ul>
      </div>
    );
  }
}

export default App;
