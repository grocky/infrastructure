import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import { renderDevTools } from './utils/devTools';

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
  <div>
    <Provider store={store}>
      <App {...props} />
    </Provider>
    {
      renderDevTools(store)
    }
  </div>
  ,
  document.getElementById('app')
);
