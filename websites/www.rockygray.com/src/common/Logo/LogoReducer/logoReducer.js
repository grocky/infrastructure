import { types as cardActionTypes } from '../LogoActions';

const initialState = {
  letterGroups: {
    index: 0,
    states: [1, 0, 2],
    sections: [
      ['middle', 'bottom'], // r
      [], // g
      ['top'] // j
    ]
  },
  refs: []
};

export default function logos(state = initialState, action) {
  switch (action.type) {
    case cardActionTypes.LOGO_INTERACTION:
      const {index, states, sections} = state.letterGroups;
      const nextIndex = index >= states.length -1
        ? 0
        : index + 1;

      return {
        ...state,
        letterGroups: {
          ...state.letterGroups,
          index: nextIndex,
        },
        highlightedSections: sections[states[nextIndex]]
      };
    case cardActionTypes.LOGO_CREATED:
      return {
        ...state,
        refs: state.refs.concat(action.payload.logoRef)
      };
    case cardActionTypes.SPIN_STARTED:
      return {
        ...state,
        isSpinning: action.payload.isSpinning
      };
    case cardActionTypes.SPIN_STOPPED:
      return {
        ...state,
        isSpinning: action.payload.isSpinning
      };
    default:
      return state;
  }
}
