import React from 'react';

import styles from './SocialLinksList.module.css'

const IconLinkListItem = ({ name, url}) => (
  <li>
    <i className={`fa fa-${name} ${styles.listItemIcon}`} />
    <a href={url} rel="noopener noreferrer" target='_blank'>{'/' + url.split('/').pop()}</a>
  </li>
);

// IconLinkListItem.propTypes = {
//   name: PropTypes.string,
//   url: PropTypes.string
// };

export default IconLinkListItem;
