import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

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

ReactDOM.render(<App {...props} />, document.getElementById('app'));
