export const types = {
  LOGO_INTERACTION: 'LOGO_INTERACTION',
  LOGO_CREATED: 'LOGO_CREATED',
  SPIN_STARTED: 'SPIN_STARTED',
  SPIN_STOPPED: 'SPIN_STOPPED'
};

export function changeLogoHighlightedSection(letterGroup: object) {
  return {
    type: types.LOGO_INTERACTION,
    payload: { sections: letterGroup.sections },
    meta: { letter: letterGroup.letter }
  }
}

export function addLogoRef(logoRef) {
  return {
    type: types.LOGO_CREATED,
    payload: { logoRef }
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
