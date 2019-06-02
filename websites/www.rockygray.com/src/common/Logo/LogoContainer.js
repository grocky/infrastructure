import {
  connect,
} from 'react-redux';

import Logo from './component';

import {
  createLogo,
  rotationStopped,
  startRotation,
  updateSections
} from "./redux";

const mapStateToProps = (state) => ({ logos: state.logos});

const mapDispatchToProps = dispatch => ({
  actions: {
    updateSections: () => dispatch(updateSections()),
    startRotation: () => dispatch(startRotation()),
    rotationStopped: () => dispatch(rotationStopped()),
    createLogo: (ref) => dispatch(createLogo(ref)),
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  ({ ...ownProps, ...stateProps, ...dispatchProps });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Logo);
