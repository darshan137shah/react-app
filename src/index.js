import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import reducer from "./reducers/userReducer";
import {createStore, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
