import React from 'react';
import { render } from 'react-dom';

import AppContainer from './Profile'
import { configureStore } from './rootRedux';

import './index.css'

const preLoadedState = {};
const store = configureStore(preLoadedState);

render(
  <AppContainer store={store} />,
  document.getElementById('root')
);
