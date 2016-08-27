import React, { PropTypes } from 'react';

import styles from '../../css/SocialLinksList.css'

const IconLinkListItem = ({ name, url}) => (
  <li>
    <i className={`fa fa-${name} ${styles.listItemIcon}`} />
    <a href={url}>{'/' + url.split('/').pop()}</a>
  </li>
);

IconLinkListItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default IconLinkListItem;
