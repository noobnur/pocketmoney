import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDCTrSBzcwy-fh0orZ3JqeY_vHvhin-rc0",
  authDomain: "pocketmoney-4afe9.firebaseapp.com",
  databaseURL: "https://pocketmoney-4afe9.firebaseio.com",
  projectId: "pocketmoney-4afe9",
  storageBucket: "",
  messagingSenderId: "208955594992"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
