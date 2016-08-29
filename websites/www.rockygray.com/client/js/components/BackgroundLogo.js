import React, { PropTypes } from 'react';

import Logo from './Logo';
import styles from '../../css/app.css'

const BackgroundLogo = ({ logo, logos, createLogo }) => (
  <div className={styles.background}>
    <Logo key="background" {...logo} {...logos} fillColor="#353535" highlightColor='#991d20' createLogo={createLogo} containerClass={styles.backgroundLogo} />
  </div>
);

BackgroundLogo.propTypes = {
  logos: PropTypes.object.isRequired,
  createLogo: PropTypes.func.isRequired
};

export default BackgroundLogo;
