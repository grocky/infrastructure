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
    const {background, card} = this.props;

    return (
      <div>

        <Provider store={store}>
          <Card {...card} />
        </Provider>

        <div className={styles.background}>
          <Logo {...background.logo} containerClass={styles.backgroundLogo} />
        </div>

        {
          renderDevTools(store)
        }

      </div>
    );
  }
});
