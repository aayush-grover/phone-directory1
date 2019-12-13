import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './ShowSubscribers';
import * as serviceWorker from './serviceWorker';
import AddSusbscriber from './AddSubscriber';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';
ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
//ReactDOM.render(<AddSusbscriber />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
