import React, { PropTypes } from 'react';

import Logo from './Logo';
import SocialLinksList from './SocialLinksList';

import styles from '../../css/Card.css';

const Card = ({ personalInfo, socialLinks, logos, createLogo, onStartRotation, onUpdateSections }) => (
  <div className="row">
    <div className={`col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3`}>
      <div className={styles.vcard}>
        <div className="row">
          <div className="col-sm-8">
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <div className={styles.rectangularBar} />
            <span className={styles.title}>{personalInfo.title}</span>
          </div>
          <div className="col-sm-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
            <Logo key="card" {...logos} containerClass={logos.isSpinning ? styles.inactiveLogo : styles.activeLogo} fillColor="#FFFFFF" highlightColor='#A1A1A1' onClick={onStartRotation} onMouseEnter={onUpdateSections} createLogo={createLogo} />
          </div>
        </div>
        <div className={`row ${styles.socialIcons}`}>
          <div className="col-md-12">
            <SocialLinksList socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  socialLinks: PropTypes.array.isRequired,
  logos: PropTypes.object.isRequired,
  createLogo: PropTypes.func.isRequired,
  onStartRotation: PropTypes.func.isRequired,
  onUpdateSections: PropTypes.func.isRequired
};

export default Card;
