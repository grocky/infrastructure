import React, { PropTypes } from 'react';

import Logo from './Logo';
import styles from '../../css/app.css'

const BackgroundLogo = ({ logo, addToRefList }) => (
  <div className={styles.background}>
    <Logo { ...logo } addToRefList={addToRefList} containerClass={styles.backgroundLogo} />
  </div>
);

BackgroundLogo.propTypes = {
  logo: PropTypes.shape({
    highlightedSections: PropTypes.array,
    fillColor: PropTypes.string,
    containerClass: PropTypes.string
  }).isRequired,
  addToRefList: PropTypes.func.isRequired
};

export default BackgroundLogo;
