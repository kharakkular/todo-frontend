
const Todo = ({ todo, handleTodoChange }) => {

    const completeTodoHandler = (event) => {
        const changedTodo = { ...todo, completed: true };
        handleTodoChange(changedTodo);
    }

    return (
        <div style={{ display: "flex" }}>
            <h2>{todo.text}</h2> <button  onClick={completeTodoHandler}>Complete Todo</button>
        </div>
    );
}

export default Todo;