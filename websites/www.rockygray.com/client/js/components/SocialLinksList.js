import React from 'react';
import styles from '../../css/SocialLinksList.css'

import {connect} from 'react-redux';

class SocialLinksList extends React.Component {

  static propTypes = {
    socialLinks: React.PropTypes.array
  };

  static defaultProps = {
    socialLinks:[
      {
        name: 'twitter',
        url: 'https://twitter.com/RockyGJr'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rockygray'
      },
      {
        name: 'github',
        url: 'https://github.com/grocky'
      }
    ]
  };

  render() {

    const {socialLinks} = this.props;

    const socialListItems = socialLinks.map(s => (
      this.createListItem(s.name, s.url)
    ));

    return (
      <ul className={styles.ul}>
        {socialListItems}
      </ul>
    );
  }

  createListItem(name, url) {
    return (
      <li key={name}>
        <i className={`fa fa-${name} ${styles.listItemIcon}`} />
        <a href={url}>{'/' + url.split('/').pop()}</a>
      </li>
    )
  }
}

export default connect(state => state.Sample)(SocialLinksList)
