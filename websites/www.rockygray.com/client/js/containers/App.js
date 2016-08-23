import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Card from '../components/Card';
import {renderDevTools} from '../utils/devTools';

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div>

        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          <Card />
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});
