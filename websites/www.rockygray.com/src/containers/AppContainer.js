import React from 'react';
import { Provider } from 'react-redux';

import App from './App'

const AppContainer = ({ store, initialProps }) => (
  <div>
    <Provider store={store}>
      <App { ...initialProps }/>
    </Provider>
  </div>
);

export default AppContainer;
