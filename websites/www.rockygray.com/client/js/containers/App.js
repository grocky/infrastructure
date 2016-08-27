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
    background: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object
  };

  render() {
    const { card, background, addToRefList } = this.props;

    return (
      <div>
        <Card { ...card } addToRefList={addToRefList} { ...this.props } />
        <BackgroundLogo addToRefList={addToRefList} { ...background } />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { store } = this.context;
    const isSpinning = store.getState().logos.isSpinning;

    if (isSpinning && prevProps.logos.isSpinning !== isSpinning) {
      TweenMax.to(prevProps.logos.refs, 3, {
        throwProps: {
          rotation: {
            velocity: 800,
            end: naturalLandingValue => Math.round(naturalLandingValue / 180) * 180
          }
        },
        ease: Power4.easeOut,
        onComplete: prevProps.onStopRotation
      });
    }
  }

}

const mapStateToProps = (state) => ({ logos: state.logos});

const mapDispatchToProps = dispatch => ({
  onUpdateSections: () => dispatch(CardActions.changeLogoHighlightedSection(_sample(Logo.letterGroups))),
  onStartRotation: () => dispatch(CardActions.startRotation()),
  onStopRotation: () => dispatch(CardActions.rotationStopped()),
  addToRefList: (ref) => dispatch(CardActions.addLogoRef(ref))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, ownProps, stateProps, dispatchProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)
