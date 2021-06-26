import React from 'react';

export default function todo({todoItem, onClick, id}) {

    return (
        <li className= {todoItem.completed ?'completed':'uncompleted'}  onClick={() => onClick(id)}> 
            <span className= {todoItem.completed ?'completed':'uncompleted'}> </span>
            {todoItem.todo}
        </li>
    )

}