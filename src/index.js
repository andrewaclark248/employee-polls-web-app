import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './components/App2';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/reducers/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
      <App2 />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
