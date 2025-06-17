import { Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

// importing custom components
import Header from './header/Header';
import Todos from "./todos/Todos";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="App">
          {/* <Header /> */}
          <Todos />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
