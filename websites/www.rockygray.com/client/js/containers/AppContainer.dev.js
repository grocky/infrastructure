import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from './App'
import DevTools from '../utils/DevTools';

const AppContainer = ({ store, initialProps }) => (
  <div>
    <Provider store={store}>
      <div>
        <App { ...initialProps }/>
        <DevTools />
      </div>
    </Provider>
  </div>
);

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  initialProps: PropTypes.object.isRequired
};

export default AppContainer;
