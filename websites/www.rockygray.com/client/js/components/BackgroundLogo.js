import React, { PropTypes } from 'react';

import Logo from './Logo';
import styles from '../../css/app.css'

const BackgroundLogo = ({ logo, logos, addToRefList }) => (
  <div className={styles.background}>
    <Logo {...logo} {...logos} highlightColor='#991d20' addToRefList={addToRefList} containerClass={styles.backgroundLogo} />
  </div>
);

BackgroundLogo.propTypes = {
  logo: PropTypes.shape({
    highlightedSections: PropTypes.array,
    fillColor: PropTypes.string,
    containerClass: PropTypes.string
  }).isRequired,
  logos: PropTypes.object.isRequired,
  addToRefList: PropTypes.func.isRequired
};

export default BackgroundLogo;
