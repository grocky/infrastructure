import { LOGO_CLICKED, SPIN_STARTED, SPIN_STOPPED } from '../constants/ActionTypes';

export function changeLogoHighlightedSection(sections: array) {
  return {
    type: LOGO_CLICKED,
    payload: { sections }
  }
}

export function startRotation() {
  return {
    type: SPIN_STARTED,
    payload: {
      isSpinning: true
    }
  }
}

export function stopRotation() {
  return {
    type: SPIN_STOPPED,
    payload: {
      isSpinning: false
    }
  }
}
