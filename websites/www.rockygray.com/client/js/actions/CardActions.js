export const types = {
  LOGO_INTERACTION: 'LOGO_INTERACTION',
  LOGO_CREATED: 'LOGO_CREATED',
  SPIN_STARTED: 'SPIN_STARTED',
  SPIN_STOPPED: 'SPIN_STOPPED'
};

export function changeLogoHighlightedSection(sections: array) {
  return {
    type: LOGO_CLICKED,
    payload: { sections }
  }
}

export function startRotation() {
  return {
    type: types.SPIN_STARTED,
    payload: {
      isSpinning: true
    }
  }
}

export function stopRotation() {
  return {
    type: types.SPIN_STOPPED,
    payload: {
      isSpinning: false
    }
  }
}
