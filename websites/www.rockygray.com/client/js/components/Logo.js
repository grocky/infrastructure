import React, { PropTypes } from 'react';

import styles from '../../css/Logo.css'

const Logo = ({ fillColor, onSpinStart, highlightedSections, containerClass }) => (
  <svg className={containerClass} fill={fillColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 323"
       onMouseEnter={e => {
         e.preventDefault();
         onSpinStart(this._container)
       }} >
    <path d="M0 216v1.8c.1 5 .6 9.9 1.3 14.7L39 206c0-28.7.1-100 .1-101.6 1.9-36.3 31.7-64.6 68.1-64.6 37.3 0 67.8 30.4 68 67.6v3l36.6-25.7C201.6 36.4 158.5.1 107.3.1 48.1.1 0 48.2 0 107.5V216z"/>
    <path d="M163.3 151.9v39.2H82.7l55.9-39.2h24.7z"/>
    <path d="M175.9 151.9v63.6c0 37.7-30.5 68.2-68.1 68.2-35.7 0-65-27.7-67.9-62.6l-35 24.6C17.9 290.3 59 323 107.7 323c59.2 0 107.3-48.1 107.3-107.4V152l-39.1-.1z"/>
  </svg>
);

Logo.propTypes = {
  fillColor: PropTypes.string.isRequired,
  onSpinStart: PropTypes.func,
  changeHighlightedSections: PropTypes.func,
  highlightedSections: PropTypes.array,
  containerClass: PropTypes.string
};

Logo.defaultProps = () => ({highlightedSections: [], containerClass: styles.logo});

export default Logo;
