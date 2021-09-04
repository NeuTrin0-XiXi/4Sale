import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { SocketProvider } from './contexts/socketContext';


ReactDOM.render(

    <Provider store={store}>
        <SocketProvider>
            <Router >
                <App />
            </Router>
        </SocketProvider>
    </Provider>
    ,
    document.getElementById('root')
);
