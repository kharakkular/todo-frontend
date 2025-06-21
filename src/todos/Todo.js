
const Todo = ({ todo, handleTodoChange }) => {

    const completeTodoHandler = (event) => {
        const changedTodo = { ...todo, completed: true };
        handleTodoChange(changedTodo);
    }

    return (
        // <div style={{ display: "flex" }}>
        //     <input type="checkbox" onClick={completeTodoHandler} /> <h2>{todo.text}</h2> 
        //     <button  onClick={completeTodoHandler}>Edit</button>
        // </div>
        <li className="collection-item">
            <label>
                <input type="checkbox" />
                <span>{todo.text}</span>
            </label>
            <a href="#!" className="secondary-content" onClick={completeTodoHandler}>
                <i className="material-icons">delete</i>
            </a>
        </li>
    );
}

export default Todo;