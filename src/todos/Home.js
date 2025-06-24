import AddTodo from "./AddTodo";
import Todos from "./Todos";
import './Home.css';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "../store/actions/todoActions";

const Home = ({ todos, getTodos }) => {
    const [allTodos, setAllTodos] = useState(todos);
    const [tab, setTab] = useState("Active");

    useEffect(() => {
        getTodos();
    }, []);

    useEffect(() => {
        if(todos != null) {
            if(tab == "Active") {
                setAllTodos(todos.filter(todo => !todo.completed));
            } else if(tab == "Completed") {
                setAllTodos(todos.filter(todo => todo.completed));
            }
        }
    }, [todos]);

    const getActiveTodos = () => {
        setTab("Active");
        setAllTodos(todos.filter(todo => !todo.completed));
    }

    const getCompletedTodos = () => {
        setTab("Completed");
        setAllTodos(todos.filter(todo => todo.completed));
    }

    return (
        <div className="page-layout">
            <ul className="sidenav sideNavWidth sidenav-fixed" style={{ display: "flex", flexDirection: "column", justifyContent: "center"}} id="mobile-demo">
                <li className="collection-item"><a href="#" className={`nav-link ${tab === "Active" ? "active" : ""}`} onClick={getActiveTodos}>Active</a></li>
                <li className="collection-item"><a className={`nav-link ${tab === "Completed" ? "active" : ""}`} href="#" onClick={getCompletedTodos}>Completed</a></li>
                <li className="collection-item"><a href="#">Filter by Stores</a></li>
            </ul>
            <div className="container main-content">
                <AddTodo />
                <Todos todos={allTodos}/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps, { getTodos })(Home);