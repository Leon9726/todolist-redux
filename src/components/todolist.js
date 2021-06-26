import React from 'react';
import Todo from './todo'

export default function todoList({todos, removeTodo}) {

    return (
        <ul>
            {
                todos.map((todo, i) => <Todo id={i} onClick= {removeTodo} key={i} todoItem={todo}></Todo>)
            }
        </ul>
    )

}

