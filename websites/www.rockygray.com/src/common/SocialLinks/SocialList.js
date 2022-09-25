import React from 'react';
import SocialLink from './SocialLink';

import './SocialLinks.css'

const SocialList = ({ socialSites }) => (
  <section className="social-sites-container">
    {socialSites.map(s => (
      <SocialLink key={s.name} {...s} />
    ))}
  </section>
);

export default SocialList;
