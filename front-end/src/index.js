import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contexts from './context/ProductsContext/Contexts';
import UserContexts from "./context/UsersContext/UserContexts";
// import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContexts>
    <Contexts>
    <App />
    </Contexts>
    </UserContexts>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

