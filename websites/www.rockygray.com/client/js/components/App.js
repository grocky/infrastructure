import React, { PropTypes } from 'react';

import Card from '../containers/Card';
import BackgroundLogo from './BackgroundLogo';

import { logo } from '../../css/Logo.css'

const App = ({ card, background }) => (
  <div>
    <Card { ...card } />
    <BackgroundLogo logo={background.logo} />
  </div>
);

App.propTypes = {
  card: PropTypes.object.isRequired,
  background: PropTypes.object.isRequired
};

export default App;
