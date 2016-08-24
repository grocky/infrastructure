import React from 'react';
import Logo from './Logo';
import styles from '../../css/app.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';

class Card extends React.Component {

  render() {
    const containerStyle = { };
    const personalInfo = {
      name: 'Rocky Gray',
      title: 'Software Engineer'
    };

    const socialInfo = {

    };

    const cardStyleNames = `${styles.vcard} ${styles.revealItem} col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3`;
    const nameStyleNames = `row ${styles.nameTitle}`;
    const socialStyleNames = `row ${styles.socialIcons}`;

    return (
      <div className="row">
        <div className={cardStyleNames}>
          <div className={nameStyleNames}>
            <div className="col-sm-8">
              <h1 className={styles.name}>{personalInfo.name}</h1>
              <div className={styles.rectangularBar}>&nbsp;</div>
              <span className={styles.title}>{personalInfo.title}</span>
            </div>
            <div className="col-sm-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
              <Logo />
            </div>
          </div>
          <div className={socialStyleNames}>
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="fa fa-github" />
                  <a href="https://github.com/grocky">/grocky</a>
                </li>
                <li>
                  <i className="fa fa-twitter" />
                  <a href="https://twitter.com/RockyGJr">/RockyGJr</a>
                </li>
                <li>
                  <i className="fa fa-linkedin" />
                  <a href="https://www.linkedin.com/in/rockygray">/rockygray</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row navigation">
            {/*<!--<div className="col-xs-3 text-left"><a href="#">Resume</a></div>-->*/}
            {/*<!--<div className="col-xs-1 text-center">/</div>-->*/}
            {/*<!--<div className="col-xs-4 text-center"><a href="#">Skills</a></div>-->*/}
            {/*<!--<div className="col-xs-1 text-center">/</div>-->*/}
            {/*<!--<div className="col-xs-3 text-right"><a href="#">Projects</a></div>-->*/}
          </div>
        </div>
        <div className={styles.background}>
          <Logo />
        </div>
      </div>
    )
  }
}

export default connect(state => state.Sample)(Card)
