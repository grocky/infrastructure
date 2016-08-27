import React, { PropTypes } from 'react';
import {TweenMax} from 'gsap';
require('../libs/ThrowPropsPlugin.min');

import Logo from '../components/Logo';
import SocialLinksList from '../components/SocialLinksList';

import styles from '../../css/Card.css';

class Card extends React.Component {

  static propTypes = {
    personalInfo: PropTypes.object.isRequired,
    socialLinks: PropTypes.array.isRequired,
    logo: PropTypes.object.isRequired,
    logos: PropTypes.object.isRequired,
    addToRefList: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object
  };

  render() {

    const { personalInfo, socialLinks, logo, logos } = this.props;

    return (
      <div className="row">
        <div className={`col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3`}>
          <div className={styles.vcard}>
            <div className="row">
              <div className="col-sm-8">
                <h1 className={styles.name}>{personalInfo.name}</h1>
                <div className={styles.rectangularBar} />
                <span className={styles.title}>{personalInfo.title}</span>
              </div>
              <div className="col-sm-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
                <Logo {...logo} {...logos} highlightColor='#696969' onClick={this.props.onStartRotation} onMouseEnter={this.props.onUpdateSections} addToRefList={this.props.addToRefList} />
              </div>
            </div>
            <div className={`row ${styles.socialIcons}`}>
              <div className="col-md-12">
                <SocialLinksList socialLinks={socialLinks} />
              </div>
            </div>
            {/*<div className="row navigation">*/}
            {/*<div className="col-xs-3 text-left"><a href="#">Resume</a></div>*/}
            {/*<div className="col-xs-1 text-center">/</div>*/}
            {/*<div className="col-xs-4 text-center"><a href="#">Skills</a></div>*/}
            {/*<div className="col-xs-1 text-center">/</div>*/}
            {/*<div className="col-xs-3 text-right"><a href="#">Projects</a></div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const { store } = this.context;
    const isSpinning = store.getState().logos.isSpinning;

    if (isSpinning && prevProps.logos.isSpinning !== isSpinning) {
      TweenMax.to(prevProps.logos.refs, 3, {
        throwProps: {
          rotation: {
            velocity: 800,
            end: naturalLandingValue => Math.round(naturalLandingValue / 180) * 180
          }
        },
        ease: Power4.easeOut,
        onComplete: prevProps.onStopRotation
      });
    }
  }
}

export default Card;
