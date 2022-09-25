import React from 'react';
import './SocialLinks.css';

const SocialLink = ({ icon, url, overrideName }) => {
  const label = overrideName ? overrideName : `/${url.split('/').pop()}`;
  return (<div className="social-link">
    <a href={url} rel="noopener noreferrer" target="_blank">
      <span className={icon} />
      <div className="label">{ label }</div>
    </a>
  </div>)
};

export default SocialLink;
