
const Todo = ({ todo, handleTodoChange }) => {

    const completeTodoHandler = (event) => {
        const changedTodo = { ...todo, completed: true };
        handleTodoChange(changedTodo);
    }

    return (
        <div style={{ display: "flex" }}>
            <input type="checkbox" onClick={completeTodoHandler} /> <h2>{todo.text}</h2> 
            <button  onClick={completeTodoHandler}>Edit</button>
        </div>
    );
}

export default Todo;