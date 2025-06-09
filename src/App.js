import logo from './logo.svg';
import './App.css';

// importing custom components
import Header from './header/Header';
import Todos from "./todos/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
