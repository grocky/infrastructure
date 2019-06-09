import React from 'react';
import { connect } from 'react-redux';

import { withRotationAnimation } from '../Animations';

import Logo from './Logo';
import { updateSections } from "./redux";

const mapStateToProps = (state) => ({ ...state.logo });

const mapDispatchToProps = dispatch => ({
  onMouseEnter: () => dispatch(updateSections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRotationAnimation(Logo, 'logo'));
