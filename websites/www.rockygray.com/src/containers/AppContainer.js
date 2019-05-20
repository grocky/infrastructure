import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import { TweenMax, Power4 } from 'gsap';

import * as CardActions from '../actions/CardActions'

import App from '../Profile/App'

class AppContainer extends Component {

  handleLogoClick = (event: SyntheticMouseEvent) => {
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

  handleUpdateSections = (event: SyntheticMouseEvent) => {
    if (this.props.logos.isSpinning) {
      return event;
    }
    this.props.actions.updateSections();
  };

  handleCreateLogo = this.props.actions.createLogo;

  render() {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({ logos: state.logos});

const mapDispatchToProps = dispatch => ({
  actions: {
    updateSections: () => dispatch(CardActions.updateSections()),
    startRotation: () => dispatch(CardActions.startRotation()),
    rotationStopped: () => dispatch(CardActions.rotationStopped()),
    createLogo: (ref) => dispatch(CardActions.createLogo(ref))
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, ownProps, stateProps, dispatchProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AppContainer)
