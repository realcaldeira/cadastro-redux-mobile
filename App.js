import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Routes } from './src/routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/Reducers';

let store = createStore(Reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

