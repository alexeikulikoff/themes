import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import btnReducer from './reducers'

import App from './App';

const store = createStore(btnReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('awesome-button')
)


