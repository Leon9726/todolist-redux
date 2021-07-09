import {connect } from 'react-redux';
import TodoList from '../components/todolist';
import {removeTodo, toggleTodo} from '../actions/index'

  const filterMyTodo = (todos = [], filter = 'ALL') => {
      switch (filter) {
        case 'TODO':
          return todos.filter( todo => !todo.completed );
        case 'COMPLETED' :
          return todos.filter( todo => todo.completed);
        default:
          return todos;
      }
  }

  const mapStateToProps =  (state) => {
    return {
        todos: filterMyTodo(state.todos, state.activeFilter)
    }
}
const myConnect = connect(mapStateToProps, {removeTodo, toggleTodo});

const MyTodoList = myConnect(TodoList);

export default MyTodoList;
