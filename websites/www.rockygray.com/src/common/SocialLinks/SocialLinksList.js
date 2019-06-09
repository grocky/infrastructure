import React from 'react';
import SocialLink from './SocialLink';

import styles from './SocialLinksList.module.css'

const SocialLinksList = ({ socialLinks }) => (
  <ul className={styles.ul}>
    {socialLinks.map(l => <SocialLink key={l.name} name={l.name} url={l.url} />)}
  </ul>
);

// SocialLinksList.propTypes = {
//   socialLinks: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
//   }).isRequired).isRequired
// };

export default SocialLinksList;
