import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import { renderDevTools } from './utils/DevTools';

import App from './components/App';

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
    },
    logo: {
      fillColor: '#ffffff'
    }
  },
  background: {
    logo: {
      fillColor: '#353535'
    }
  }
};

const store = configureStore({});

render(
  <App store={store} background={props.background} card={props.card} />,
  document.getElementById('app')
);
