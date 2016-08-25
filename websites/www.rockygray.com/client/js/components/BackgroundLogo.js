import React, { PropTypes } from 'react';

import Logo from './Logo';
import styles from '../../css/app.css'

const BackgroundLogo = ({ logo }) => (
  <div className={styles.background}>
    <Logo { ...logo } containerClass={styles.backgroundLogo} />
  </div>
);

BackgroundLogo.propTypes = {
  logo: PropTypes.shape({
    highlightedSections: PropTypes.array,
    fillColor: PropTypes.string,
    containerClass: PropTypes.string
  }).isRequired
};

export default BackgroundLogo;
