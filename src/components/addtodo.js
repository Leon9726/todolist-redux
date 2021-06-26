import React from 'react'

export default function addTodoComponent({addNew}) {

    let todoInput;

    return (
        <div className= "addTodo">
            <input ref= { node => {todoInput = node}}
            onKeyUp = {
                (event) => {
                    if (event.keyCode === 13){
                        addNew(todoInput.value);
                        todoInput.value = "";
                    }
                }
            }
            ></input>
            <button onClick= 
                {
                    () => {
                        addNew(todoInput.value);
                        todoInput.value = "";
                    }
                }
                >Aggiungi  </button>
        </div>
    )
    
}