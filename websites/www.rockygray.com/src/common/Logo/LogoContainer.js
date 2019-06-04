import React from 'react';
import {
  connect,
} from 'react-redux';

import Logo from './Logo';

import {
  rotationStopped,
  startRotation,
  updateSections
} from "./redux";

const mapStateToProps = (state) => ({ logos: state.logos});

const mapDispatchToProps = dispatch => (
  {
    actions: {
      updateSections: () => dispatch(updateSections()),
      startRotation: () => dispatch(startRotation()),
      rotationStopped: () => dispatch(rotationStopped()),
    },
  }
);

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  ({ ...ownProps, ...stateProps, ...dispatchProps });


class LogoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.logoRef = React.createRef();
  }

  render() {
    const {
      actions: {
        updateSections,
        rotationStopped,
        startRotation,
      },
      logos: {
        letterGroups: {
          segments,
        },
        highlightedSections,
        isSpinning,
      },
    } = this.props;
    return (
      <Logo
        isSpinning={isSpinning}
        svgRef={this.logoRef}
        segments={segments}
        highlightedSections={highlightedSections}
        onMouseEnter={updateSections}
        onRotationStop={rotationStopped}
        startRotation={startRotation}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(LogoContainer);
