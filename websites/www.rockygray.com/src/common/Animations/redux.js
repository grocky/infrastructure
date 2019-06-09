const  ANIMATION_STARTED = key =>  `animations/${key}/ANIMATION_STARTED`;
const  ANIMATION_STOPPED = key => `animations/${key}/ANIMATION_STOPPED`;

const initialState = { };

export default function reducer(state = initialState, action = {}) {
  const { key } = action.payload || { key: '' };
  switch (action.type) {
    case ANIMATION_STARTED(key):
      if (state[key]) {
        return state;
      }

      return {
        ...state,
        [key]: true,
      };
    case ANIMATION_STOPPED(key):
      return {
        ...state,
        [key]: false,
      };
    default:
      return state;
  }
}

export function startRotation(key) {
  return {
    type: ANIMATION_STARTED(key),
    payload: {
      key,
    }
  }
}

export function rotationStopped(key) {
  return {
    type: ANIMATION_STOPPED(key),
    payload: {
      key,
    }
  }
}
