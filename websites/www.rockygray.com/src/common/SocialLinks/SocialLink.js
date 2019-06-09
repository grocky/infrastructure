import React from 'react';
import './SocialLinks.css';

const SocialLink = ({ name, url}) => (
  <div className="social-link">
    <a href={url} rel="noopener noreferrer" target="_blank">
      <span className={`fa fa-${name}`} />
      <div className="label">{ `/${url.split('/').pop()}` }</div>
    </a>
  </div>
);

export default SocialLink;
