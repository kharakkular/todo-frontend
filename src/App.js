import { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

// importing custom components
import Header from './header/Header';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './todos/Home';


function App() {

  useEffect(() => {
    // This initializes Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <div className="">
          <Header />
          <Home />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
