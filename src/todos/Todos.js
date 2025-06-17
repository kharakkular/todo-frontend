import Todo from "./Todo";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "../store/actions/todoActions";

const Todos = ( { todos, loading, getTodos }) => {
    const [text, setText] = useState("");
    const [allTodos, setAllTodos] = useState([]);


    // console.log("newTodoHandler: " + text);
    console.log("Todos length: " + allTodos);

    useEffect(() => {
        getTodos();
    }, []);

    useEffect(() => {
        setAllTodos(todos);
    }, [todos]);

    const newTodoHandler = (event) => {
        console.log("Event target value from newTodoHandler: " + event.target.value);
        setText(event.target.value);
    }

    // 2025-06-08T21:48:04.638Z
    const handleKeyDown = (event) => {
        // if(event.key === "Enter") {
        //     let currentTime = new Date().toISOString();
        //     const newTodo = {
        //         id: allTodos.length + 1,
        //         text: text,
        //         completed: false,
        //         createdAt: currentTime
        //     }
        //     setAllTodos([...todos, newTodo]);
        //     setText("");
        // }
    }

    const handleTodoChange = (todo) => {
        const inCompleteTodos = todos.filter(t => t.id !== todo.id );
        setAllTodos([...inCompleteTodos]);
    }

    if(loading) {
        return <>Loading</>
    }

    // useEffect( () => {
    //     // setTodos(mock);
    // }, []);

    return (
        <div>
            <div>
                <input type="text" placeholder="add todo" value={text} onChange={newTodoHandler} onKeyDown={handleKeyDown}/>
            </div>
            {!loading && allTodos != null && allTodos.filter(t => !t.completed ).map((val, index) => {
                return <Todo todo={ val } handleTodoChange={handleTodoChange} key={val.id}/>
            })}
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    loading: state.loading
});

export default connect(mapStateToProps, { getTodos })(Todos);