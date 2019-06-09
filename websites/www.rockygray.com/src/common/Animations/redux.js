const  ANIMATION_STARTED =  'animations/ANIMATION_STARTED';
const  ANIMATION_STOPPED = 'animations/ANIMATION_STOPPED';

const initialState = { };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ANIMATION_STARTED:
      if (state[action.payload.ref]) {
        return state;
      }

      return {
        ...state,
        [action.payload.ref]: true,
      };
    case ANIMATION_STOPPED:
      return {
        ...state,
        [action.payload.ref]: false,
      };
    default:
      return state;
  }
}

export function startRotation(ref) {
  return {
    type: ANIMATION_STARTED,
    payload: {
      ref,
    }
  }
}

export function rotationStopped(ref) {
  return {
    type: ANIMATION_STOPPED,
    payload: {
      ref,
    }
  }
}
