import React, { Component } from 'react';

import './Profile.css'
import headShot from './headshot_450.jpg'
import ProfilePicture from './ProfilePicture';
import LogoContainer from '../common/Logo/LogoContainer';
import SocialLink from '../common/SocialLinks/SocialLink';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const profilePictureProps = {
      image: headShot,
      imageWidth: 320,
      xCenter: 160,
      yCenter: 80,
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
      <SocialLink key={s.name} name={s.name} url={s.url}/>
    ));

    return (
      <>
        <main className="profile-container">
          <div className="background-logo">
            <LogoContainer />
          </div>
          <header className="information">
              <ProfilePicture {...profilePictureProps} />
              <div className="contact-info">
                <p className="name">Rocky Gray Jr.</p>
                <p className="title"><em>Software Engineer</em></p>
              </div>
          </header>
          <section className="social-sites-container">
            {socialLinks}
          </section>
        </main>
        <footer>
          <p>&copy; Rocky Gray {this.state.date.getFullYear()}</p>
        </footer>
      </>
    );
  }
}

export default Profile;
