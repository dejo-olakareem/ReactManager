import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
