import React from 'react';
import { render } from 'react-dom';

import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore';

const prelodedState = {};
const store = configureStore(prelodedState);

const props = {
  card: {
    socialLinks:[
      {
        name: 'github',
        url: 'https://github.com/grocky'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rockygray'
      },
      {
        name: 'medium',
        url: 'https://medium.com/@rocky.grayjr'
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/RockyGJr'
      },
    ],
    personalInfo: {
      name: 'Rocky Gray Jr',
      title: 'Software Engineer'
    }
  }
};

render(
  <AppContainer store={store} initialProps={props} />,
  document.getElementById('root')
);
