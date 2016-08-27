import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from './App'
import DevTools from '../utils/DevTools';

import { logo } from '../../css/Logo.css'

import configureStore from '../store/configureStore';
const store = configureStore({});

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <App { ...this.props }/>
        </Provider>
        <Provider store={store}>
          <DevTools />
        </Provider>
      </div>
    );
  }
}
