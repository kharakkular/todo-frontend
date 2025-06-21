import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todoActions";

const AddTodo = ({ todos, addTodo }) => {

    const [text, setText] = useState("");

    const newTodoHandler = (event) => {
        // console.log("Event target value from newTodoHandler: " + event.target.value);
        setText(event.target.value);
    }

    // 2025-06-08T21:48:04.638Z
    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            let currentTime = new Date().toISOString();
            const newTodo = {
                id: todos.length + 1,
                text: text,
                completed: false,
                createdAt: currentTime
            }
            addTodo(newTodo);
            setText("");
        }
    }

    return (
        <div>
            <input type="text" placeholder="add todo" value={text} onChange={newTodoHandler} onKeyDown={handleKeyDown}/>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps, { addTodo })(AddTodo);