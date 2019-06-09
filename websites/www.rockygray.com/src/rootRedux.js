import { createStore } from 'redux'
import { combineReducers } from 'redux';

import animations from './common/Animations/redux';

const rootReducer = combineReducers({
  animations,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(preLoadedState) {
  return createStore(
    rootReducer,
    preLoadedState,
    enhancer,
  );
}
