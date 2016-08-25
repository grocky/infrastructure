import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  isSpinning: false,
  highlightedSections: []
};

export default function logos(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGO_CLICKED:
      return {
        ...state,
        highlightedSections: action.payload.sections
      };
    default:
      return state;
  }
}
