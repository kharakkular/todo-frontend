import AddTodo from "./AddTodo";
import Todos from "./Todos";
import './Home.css';

const Home = () => {

    return (
        <div className="page-layout">
            <ul className="sidenav sideNavWidth sidenav-fixed" style={{ display: "flex", flexDirection: "column", justifyContent: "center"}} id="mobile-demo">
                <li className="collection-item "><a href="#">Active</a></li>
                <li className="collection-item"><a href="#">Completed</a></li>
                <li className="collection-item"><a href="#">Filter by Stores</a></li>
            </ul>
            <div className="container main-content">
                <AddTodo />
                <Todos />
            </div>
        </div>
    );
}

export default Home;