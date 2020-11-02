import React, { Component } from 'react';

import './Profile.css'
import headShot from './headshot_450.jpg'
import ProfilePicture from './ProfilePicture';
import LogoContainer from '../common/Logo/LogoContainer';
import SocialList from '../common/SocialLinks/SocialList';
import { withRotationAnimation } from '../common/Animations';

const profilePictureProps = {
  image: headShot,
  imageWidth: 320,
  xCenter: 160,
  yCenter: 80,
  circleDiameter: 150,
};

const AnimatedProfilePicture = withRotationAnimation(ProfilePicture, 'profilePicture', profilePictureProps);

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const socialSites = [
      {
        icon: 'fa fa-pen',
        url: 'https://blog.rockygray.com/about',
        overrideName: 'blog',
      },
      {
        icon: 'fa fa-file-alt',
        url: 'https://resume.rockygray.com',
        overrideName: 'resume',
      },
      {
        icon: 'fab fa-github',
        url: 'https://github.com/grocky',
      },
      {
        icon: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/grocky',
      },
      {
        icon: 'fab fa-medium',
        url: 'https://medium.com/@grocky'
      },
      {
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/RockyGJr',
      },
      {
        icon: 'fab fa-stack-overflow',
        url: 'https://stackoverflow.com/story/grocky',
      },
    ];

    return (
      <>
        <main className="profile-container">
          <div className="background-logo">
            <LogoContainer />
          </div>
          <header className="information">
            <AnimatedProfilePicture />
            <div className="contact-info">
              <p className="name">Rocky Gray Jr.</p>
              <p className="title"><em>Software Engineer</em></p>
            </div>
          </header>
          <SocialList socialSites={socialSites} />
        </main>
        <footer>
          <p>&copy; Rocky Gray {this.state.date.getFullYear()}</p>
        </footer>
      </>
    );
  }
}

export default Profile;
