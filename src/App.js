import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCMQoq2nniXtYqJ-dVrGgNbJRdEa3nFdxs',
    authDomain: 'manager-65253.firebaseapp.com',
    databaseURL: 'https://manager-65253.firebaseio.com',
    projectId: 'manager-65253',
    storageBucket: 'manager-65253.appspot.com',
    messagingSenderId: '908114095727'
  };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
