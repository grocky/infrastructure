import React from 'react';
import { render } from 'react-dom';

import AppContainer from './Profile/ProfileContainer'
import configureStore from './ConfigureStore';

import './index.css'

const preLoadedState = {};
const store = configureStore(preLoadedState);

render(
  <AppContainer store={store} />,
  document.getElementById('root')
);
