import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import NavBar from './components/NavBar';
import SpecStore from './store/SpecStore';
import TypeStore from './store/TypeStore';
import UserStore from './store/UserStore';
//import { BrowserRouter } from "react-router-dom";
export const Context = createContext(null)
//console.log(process.env.REACT_APP_API_URL)


ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    types: new TypeStore(),
    spec: new SpecStore()
  }}>
    <App/>
  </Context.Provider>,
  
  document.getElementById('root')
);




