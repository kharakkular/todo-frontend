import Todo from "./Todo";
import mock from "../mock.json";
import { useEffect, useState } from "react";

const Todos = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState(mock);

    console.log("newTodoHandler: " + text);
    console.log("Todos length: " + todos.length);

    const newTodoHandler = (event) => {
        console.log("Event target value from newTodoHandler: " + event.target.value);
        setText(event.target.value);
    }

    // 2025-06-08T21:48:04.638Z
    const handleKeyDown = (event) => {
        if(event.key == "Enter") {
            let currentTime = new Date().toISOString();
            const newTodo = {
                id: todos.length + 1,
                text: text,
                completed: false,
                createdAt: currentTime
            }
            setTodos([...todos, newTodo]);
            setText("");
        }
    }

    const handleTodoChange = (todo) => {
        const inCompleteTodos = todos.filter(t => t.id != todo.id );
        setTodos([...inCompleteTodos]);
    }

    // useEffect( () => {
    //     // setTodos(mock);
    // }, []);

    return (
        <div>
            <div>
                <input type="text" placeholder="add todo" value={text} onChange={newTodoHandler} onKeyDown={handleKeyDown}/>
            </div>
            {todos.filter(t => !t.completed ).map((val, index) => {
                return <Todo todo={ val } handleTodoChange={handleTodoChange} key={val.id}/>
            })}
        </div>
    );
}

export default Todos;