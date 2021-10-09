// import { render } from "react-dom";
// import { Provider } from "react-redux";
//
// import App from "./App";
// import store from "./store";
//
// const rootElement = document.getElementById("root");
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// );



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App3';
// import reportWebVitals from './reportWebVitals';
// import { store } from './app/store';
import store from "./store";
import { Provider } from 'react-redux';
// import App2 from "./App2";
import App3 from "./App3";
import reportWebVitals from "./reportWebVitals";
// import reportWebVitals from "../src/reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<App />*/}


            <App3/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
