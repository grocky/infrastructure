import { createStore } from 'redux'
import rootReducer from './RootReducer'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState
  )
}
