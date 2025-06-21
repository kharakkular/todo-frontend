import { useEffect, useState } from "react";

const Todo = ({ todo, handleTodoChange }) => {

    const updateTodoHandler = (event) => {
        console.log(`Event target name: ${event.target.value}`);
        const changedTodo = { ...todo, completed: !todo.completed };
        handleTodoChange(changedTodo);
    }

    const deleteTodoHandler = (event) => {
        console.log("Event target name: ", {target: event.target});
    }

    return (
        // <div style={{ display: "flex" }}>
        //     <input type="checkbox" onClick={completeTodoHandler} /> <h2>{todo.text}</h2> 
        //     <button  onClick={completeTodoHandler}>Edit</button>
        // </div>
        <li className="collection-item">
            <label>
                <input name="completed" type="checkbox" checked={todo.completed} onChange={updateTodoHandler}/>
                <span>{todo.text}</span>
            </label>
            <a href="#!" name="delete" className="secondary-content" >
                <i name="delete" className="material-icons" onClick={deleteTodoHandler}>delete</i>
            </a>
        </li>
    );
}

export default Todo;