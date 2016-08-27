import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from './App'

const AppContainer = ({ store, initialProps }) => (
  <div>
    <Provider store={store}>
      <App { ...initialProps }/>
    </Provider>
  </div>
);

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  initialProps: PropTypes.object.isRequired
};

export default AppContainer;
