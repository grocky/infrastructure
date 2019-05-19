import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TweenMax, Power4 } from 'gsap';

import './App.css'
import headshot from './headshot_450.jpg'
import ProfilePicture from './ProfilePicture';
import Logo from '../components/Logo';

class App extends Component {

  render() {

    const profilePictureProps = {
      image: headshot,
      imageWidth: 350,
      xCenter: 180,
      yCenter: 90,
      circleDiameter: 150,
    };

    const socialSites = [
      {
        name: 'github',
        url: 'https://github.com/grocky'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rockygray'
      },
      {
        name: 'medium',
        url: 'https://medium.com/@rocky.grayjr'
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/RockyGJr'
      },
      {
        name: 'stack-overflow',
        url: 'https://stackoverflow.com/story/rockygray'
      },
    ];

    const socialLinks = socialSites.map(s => (
      <div class="social-link" key={s.name}>
        <a href={s.url} rel="noopener noreferrer" target="_blank">
          <div className={`fa fa-${s.name} fa-4x`}></div>
          <div class="label">{ `/${s.url.split('/').pop()}` }</div>
        </a>
      </div>
    ));

    return (
      <>
        <div class="background-logo">
          <Logo />
        </div>
        <main class="profile-container">
          <header class="information">
              <ProfilePicture {...profilePictureProps} />
              <div class="contact-info">
                <p class="name">Rocky Gray Jr.</p>
                <p class="title">Software Engineer</p>
              </div>
          </header>
          <section class="social-sites-container">
            {socialLinks}
          </section>
        </main>
        <footer>
          <p>&copy; Rocky Gray {new Date().getFullYear()}</p>
        </footer>
      </>
    );
  }
}

export default App
