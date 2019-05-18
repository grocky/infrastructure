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
			<main class="profile">
				<section class="profile-section">
					<ProfilePicture {...profilePictureProps} />
				</section>
			</main>
    );
  }
}

export default App
