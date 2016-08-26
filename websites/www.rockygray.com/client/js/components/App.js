import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import Card from '../containers/Card';
import BackgroundLogo from './BackgroundLogo';
import DevTools from '../utils/DevTools';

import { logo } from '../../css/Logo.css'

const App = ({ store, card, background, addToRefList }) => {

  return (
    <Provider store={store}>
      <div>
        <Card { ...card } />
        <BackgroundLogo addToRefList={addToRefList} { ...background } />
        <DevTools />
      </div>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  background: PropTypes.object.isRequired,
  addToRefList: PropTypes.func
};

export default App;
