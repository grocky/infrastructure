import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import _sample from 'lodash/sample';

import {TweenMax} from 'gsap';
require('../libs/ThrowPropsPlugin.min');

import BackgroundLogo from '../components/BackgroundLogo';
import Logo from '../components/Logo';
import Card from '../components/Card';

import * as CardActions from '../actions/CardActions';

class App extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
    logos: PropTypes.object.isRequired
  };

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
    this.props.actions.updateSections(_sample(Logo.letterGroups));
  };

  handleCreateLogo = this.props.actions.createLogo;

  render() {
    const { card, logos } = this.props;

    return (
      <div>
        <Card
          { ...card }
          logos={logos}
          onUpdateSections={this.handleUpdateSections}
          onStartRotation={this.handleLogoClick}
          createLogo={this.handleCreateLogo}
        />
        <BackgroundLogo
          logos={logos}
          createLogo={this.handleCreateLogo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ logos: state.logos});

const mapDispatchToProps = dispatch => ({
  actions: {
    updateSections: (letterGroup) => dispatch(CardActions.updateSections(letterGroup)),
    startRotation: () => dispatch(CardActions.startRotation()),
    rotationStopped: () => dispatch(CardActions.rotationStopped()),
    createLogo: (ref) => dispatch(CardActions.createLogo(ref))
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, ownProps, stateProps, dispatchProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)
