import React from 'react';
import Logo from './Logo';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';

class Card extends React.Component {

  render() {
    const containerStyle = { };

    return (
      <div className="row" style={containerStyle}>
        <div className="col-md-6">
          <Logo />
        </div>
      </div>
    )
  }
}

export default connect(state => state.Sample)(Card)
