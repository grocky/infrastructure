import React from 'react';
import styles from '../../css/SocialLinksList.css'

import {connect} from 'react-redux';

class SocialLinksList extends React.Component {

  static propTypes = {
    socialLinks: React.PropTypes.array
  };

  render() {

    const {socialLinks} = this.props;

    const socialListItems = socialLinks.map(l => (
      <ListItem key={l.name} name={l.name} url={l.url} />
    ));

    return (
      <ul className={styles.ul}>
        {socialListItems}
      </ul>
    );
  }
}

const ListItem = React.createClass({
  render: function() {
    const {name, url} = this.props;
    return (
      <li>
        <i className={`fa fa-${name} ${styles.listItemIcon}`} />
        <a href={url}>{'/' + url.split('/').pop()}</a>
      </li>
    );
  }
});

export default connect(state => state.Sample)(SocialLinksList)
