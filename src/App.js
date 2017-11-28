import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
