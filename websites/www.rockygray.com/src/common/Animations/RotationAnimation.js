import React, { Component } from 'react';
import { Power4, TweenMax } from "gsap";
import { connect } from 'react-redux';

import {
  rotationStopped,
  startRotation,
} from "./redux";

const mapStateToProps = (state) => ({ ...state.animations });

const mapDispatchToProps = dispatch => (
  {
    startRotation: (ref) => dispatch(startRotation(ref)),
    rotationStopped: (ref) => dispatch(rotationStopped(ref)),
  }
);

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  ({ ...ownProps, ...stateProps, ...dispatchProps });

export const withRotationAnimation = (WrappedComponent) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  )(class RotationAnimation extends Component {
    constructor(props) {
      super(props);
      this.ref = null;
    }

    onClick = (e) => {
      e.preventDefault();
      this.props.startRotation(this.ref);
    };

    getRef = (ref) => this.ref = ref;

    onAnimationEnd = () => {
      this.props.rotationStopped(this.ref);
    };

    componentDidUpdate(prevProps, prevState) {
      if (!prevProps[this.ref] && this.props[this.ref]) {
        this.doAnimation();
      }
    }

    doAnimation = () => {
      TweenMax.to(this.ref, 3, {
        throwProps: {
          rotation: {
            velocity: 800,
            end: naturalLandingValue => Math.round(naturalLandingValue / 180) * 180
          }
        },
        ease: Power4.easeOut,
        onComplete: this.onAnimationEnd,
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onClick={this.onClick}
          getRef={this.getRef}
        />
      )
    }
  });
};
