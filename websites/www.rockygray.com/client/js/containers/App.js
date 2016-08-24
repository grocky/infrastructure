import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Card from '../components/Card';
import Logo from '../components/Logo';
import {renderDevTools} from '../utils/devTools';

import styles from '../../css/app.css'
import {logo} from '../../css/Logo.css'

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div>

        <Provider store={store}>
          <Card />
        </Provider>

        <div className={styles.background}>
          <Logo fillColor="#353535" containerClass={styles.backgroundLogo} />
        </div>

        {
          renderDevTools(store)
        }

      </div>
    );
  }
});
