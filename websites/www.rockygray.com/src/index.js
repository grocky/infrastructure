import React from 'react';
import { render } from 'react-dom';
import {Provider} from "react-redux";

import ProfileContainer from './Profile'
import configureStore from './rootRedux';

import './index.css'

const preLoadedState = {};
const store = configureStore(preLoadedState);

render(
  <Provider store={store}>
    <ProfileContainer />
  </Provider>,
  document.getElementById('root'),
);
