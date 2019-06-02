import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import { TweenMax, Power4 } from 'gsap';

import {
  updateSections,
  startRotation,
  rotationStopped,
  createLogo,
} from '../common/Logo';

import Profile from './component'

class ProfileContainer extends Component {

  handleLogoClick = (event) => {
    event.preventDefault();
    if (this.props.logos.isSpinning) {
      return event;
    }
    this.props.actions.startRotation();
    TweenMax.to(this.props.logos.refs, 3, {
      throwProps: {
        rotation: {
          velocity: 800,
          end: naturalLandingValue => Math.round(naturalLandingValue / 180) * 180
        }
      },
      ease: Power4.easeOut,
      onComplete: this.props.actions.rotationStopped
    });
  };

  handleUpdateSections = (event) => {
    if (this.props.logos.isSpinning) {
      return event;
    }
    this.props.actions.updateSections();
  };

  handleCreateLogo = this.props.actions.createLogo;

  render() {
    return (
      <Provider store={this.props.store}>
        <Profile />
      </Provider>
    );
  }
}

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
)(ProfileContainer)
