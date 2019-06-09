const  LOGO_INTERACTION = 'logo/LOGO_INTERACTION';

const initialState = {
  letterGroups: {
    index: 0,
    states: [1, 0, 1, 2],
    sections: [
      ['middle', 'bottom'], // r
      [], // g
      ['top'] // j
    ]
  },
  isSpinning: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGO_INTERACTION:
      if (state.isSpinning) {
        return state;
      }

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
    default:
      return state;
  }
}

export function updateSections() {
  return {
    type: LOGO_INTERACTION,
  }
}
