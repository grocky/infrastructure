import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TweenMax, Power4 } from 'gsap';

import headshot from './headshot_450.jpg'
import ProfilePicture from './ProfilePicture';

import './App.css'

class App extends Component {

  render() {
    const { card, logos } = this.props;

    const profilePictureProps = {
      image: headshot,
      imageWidth: 350,
      xCenter: 180,
      yCenter: 90,
      circleDiameter: 150,
    };

    return (
      <>
        <main class="profile">
          <header class="profile-section">
            <div class="information">
              <ProfilePicture {...profilePictureProps} />
              <p class="name">Rocky Gray Jr.</p>
              <p class="title">Software Engineer</p>
            </div>
          </header>
        </main>
        <footer>
          <p>&copy; Rocky Gray 2019</p>
        </footer>
      </>
    );
  }
}

export default App
