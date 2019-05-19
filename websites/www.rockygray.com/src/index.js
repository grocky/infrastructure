import React from 'react';
import { render } from 'react-dom';

import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore';

import './index.css'

const preLoadedState = {};
const store = configureStore(preLoadedState);

render(
  <AppContainer store={store} />,
  document.getElementById('root')
);
