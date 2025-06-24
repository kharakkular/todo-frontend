import Todo from "./Todo";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTodos, deleteTodo, updateTodo } from "../store/actions/todoActions";
import Loader from "../extras/Loader";

const Todos = ( { todos, loading, getTodos, error, updateTodo }) => {


    // console.log("newTodoHandler: " + text);
    // console.log("Alltodos value from Todos: ", {todos: allTodos});
    console.log("Loading value from Todos: " + loading);

    const handleTodoChange = (todo) => {
        updateTodo(todo);
        // const inCompleteTodos = todos.filter(t => t.id !== todo.id );
        // setAllTodos([...inCompleteTodos]);
    }

    if(loading) {
        return <Loader />
    }

    if(error) {
        return <div>{error}</div>
    }

    // useEffect( () => {
    //     // setTodos(mock);
    // }, []);

    return (
        <div>
            <ul className="collection with-header">
                {!loading && todos != null && todos.map((val, index) => {
                    return <Todo todo={ val } handleTodoChange={handleTodoChange} key={val.id}/>
                })}
            {/* <li class="collection-header"><h4>First Names</h4></li> */} { /* Utilizing this for naming of store types*/ }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps, { getTodos, deleteTodo, updateTodo })(Todos);