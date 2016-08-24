import React from 'react';
import Logo from './Logo';
import SocialLinksList from './SocialLinksList';

import styles from '../../css/Card.css';

import {connect} from 'react-redux';

class Card extends React.Component {

  render() {
    const personalInfo = {
      name: 'Rocky Gray Jr',
      title: 'Software Engineer'
    };

    return (
      <div className="row">
        <div className={`col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3`}>
          <div className={styles.vcard}>
            <div className="row">
              <div className="col-sm-8">
                <h1 className={styles.name}>{personalInfo.name}</h1>
                <div className={styles.rectangularBar}>&nbsp;</div>
                <span className={styles.title}>{personalInfo.title}</span>
              </div>
              <div className="col-sm-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
                <Logo fillColor="#ffffff"/>
              </div>
            </div>
            <div className={`row ${styles.socialIcons}`}>
              <div className="col-md-12">
                <SocialLinksList />
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
}

export default connect(state => state.Sample)(Card)
