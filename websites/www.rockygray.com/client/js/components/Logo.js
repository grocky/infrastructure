import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

class Logo extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    const fill = '#ffffff';

    const logoStyle = { };

    return (
      <svg style={logoStyle} id="rgj-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 323">
        <path id="logo-top" fill={fill} d="M0 216v1.8c.1 5 .6 9.9 1.3 14.7L39 206c0-28.7.1-100 .1-101.6 1.9-36.3 31.7-64.6 68.1-64.6 37.3 0 67.8 30.4 68 67.6v3l36.6-25.7C201.6 36.4 158.5.1 107.3.1 48.1.1 0 48.2 0 107.5V216z"/>
        <path id="logo-middle" fill={fill} d="M163.3 151.9v39.2H82.7l55.9-39.2h24.7z"/>
        <path id="logo-bottom" fill={fill} d="M175.9 151.9v63.6c0 37.7-30.5 68.2-68.1 68.2-35.7 0-65-27.7-67.9-62.6l-35 24.6C17.9 290.3 59 323 107.7 323c59.2 0 107.3-48.1 107.3-107.4V152l-39.1-.1z"/>
      </svg>
    );
  }
}

export default connect(state => state.Sample)(Logo)
