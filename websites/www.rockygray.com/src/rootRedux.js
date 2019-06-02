import { createStore } from 'redux'
import { combineReducers } from 'redux';

import logos from './common/Logo';

const rootReducer = combineReducers({
  logos,
});

export default function configureStore(preLoadedState) {
  return createStore(
    rootReducer,
    preLoadedState,
  );
}
