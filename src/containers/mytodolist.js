import ToDoList from '../components/todolist'
import { connect } from 'react-redux'
import {removeTodo} from '../action/index'

const mapStateToProps = (state) => {
    return {
        todos: [...state.todos]
    }
}

const myConnect = connect(mapStateToProps, {removeTodo})
const MyToDoList = myConnect(ToDoList)

export default MyToDoList