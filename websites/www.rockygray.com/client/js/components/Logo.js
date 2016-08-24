import React, {Component} from 'react';
import {TweenMax} from 'gsap';
import _sample from 'lodash/sample';
import _omit from 'lodash/omit';

require('../libs/ThrowPropsPlugin.min');

import styles from '../../css/Logo.css'

class Logo extends Component {

  constructor() {
    super();
    this.bind('handleClick', 'onMouseEnter');
    this.state = {
      isSpinning: false
    };
  }

  bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  static defaultProps() {
    console.log('defaultProps()');
    return {
      containerClass: styles.logo
    }
  }

  static propTypes = {
    fillColor: React.PropTypes.string.isRequired,
    containerClass: React.PropTypes.string
  };

  handleClick(event: Object) {
    if (this.state.isSpinning) {
      return false;
    }


    this.setState({isSpinning: true});

    TweenMax.to(this._container, 3, {
      throwProps: {
        rotation: {
          velocity: 800,
          end: naturalLandingValue => Math.round(naturalLandingValue / 180) * 180
        }
      },
      ease: Power4.easeOut,
      onComplete: () => this.setState({isSpinning: false})
    });
    this.changeColorOnRandomSegment();
  }

  onMouseEnter(event: SyntheticMouseEvent) {
    this.changeColorOnRandomSegment();
  }

  changeColorOnRandomSegment() {

    const pieces = [this.top, this.middle, this.bottom];
    const colors = ['#ffffff', '#000000', '#353535'];

    TweenMax.to(_sample(pieces), 2, {fill:_sample(colors)})
  }

  render() {
    const {fillColor, containerClass} = this.props;

    return (
      <svg onMouseEnter={this.onMouseEnter} onClick={this.handleClick} ref={c => this._container = c} className={containerClass} fill={fillColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 323">
        <path ref={p => this.top = p} d="M0 216v1.8c.1 5 .6 9.9 1.3 14.7L39 206c0-28.7.1-100 .1-101.6 1.9-36.3 31.7-64.6 68.1-64.6 37.3 0 67.8 30.4 68 67.6v3l36.6-25.7C201.6 36.4 158.5.1 107.3.1 48.1.1 0 48.2 0 107.5V216z"/>
        <path ref={p => this.middle = p} d="M163.3 151.9v39.2H82.7l55.9-39.2h24.7z"/>
        <path ref={p => this.bottom = p} d="M175.9 151.9v63.6c0 37.7-30.5 68.2-68.1 68.2-35.7 0-65-27.7-67.9-62.6l-35 24.6C17.9 290.3 59 323 107.7 323c59.2 0 107.3-48.1 107.3-107.4V152l-39.1-.1z"/>
      </svg>
    );
  }
}

export default Logo
