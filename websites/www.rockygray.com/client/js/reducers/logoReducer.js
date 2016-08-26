import { types as cardActionTypes } from '../actions/CardActions';

const initialState = {
  isSpinning: false,
  highlightedSections: [],
  refs: []
};

export default function logos(state = initialState, action) {
  switch (action.type) {
    case cardActionTypes.LOGO_INTERACTION:
      return {
        ...state,
        highlightedSections: action.payload.sections
      };
    case cardActionTypes.LOGO_CREATED:
      return {
        ...state,
        refs: state.refs.concat(action.payload.logoRef)
      };
    default:
      return state;
  }
}
