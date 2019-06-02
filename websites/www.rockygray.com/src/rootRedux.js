import { createStore } from 'redux'
import { combineReducers } from 'redux';

import logos from './common/Logo';

const rootReducer = combineReducers({
  logos
});

export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState
  )
}
