import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';
import _sample from 'lodash/sample';

import BackgroundLogo from '../components/BackgroundLogo';
import Logo from '../components/Logo';
import Card from './Card';

import * as CardActions from '../actions/CardActions';

class App extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
    background: PropTypes.object.isRequired,
  };

  render() {
    const { card, background, addToRefList } = this.props;

    return (
      <div>
        <Card { ...card } addToRefList={addToRefList} { ...this.props } />
        <BackgroundLogo addToRefList={addToRefList} { ...background } />
      </div>
    );
  }

}

const mapStateToProps = (state) => ({ logos: state.logos});

const mapDispatchToProps = dispatch => ({
  onUpdateSections: () => dispatch(CardActions.changeLogoHighlightedSection(_sample(Logo.letterGroups))),
  onStartRotation: () => dispatch(CardActions.startRotation()),
  onStopRotation: () => dispatch(CardActions.rotationStopped()),
  addToRefList: (ref) => dispatch(CardActions.addLogoRef(ref))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, ownProps, stateProps, dispatchProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)
