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
        name: 'twitter',
        url: 'https://twitter.com/RockyGJr'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rockygray'
      },
      {
        name: 'github',
        url: 'https://github.com/grocky'
      }
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
