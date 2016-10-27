// import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {isAuthenticated} from 'actions';
import {isAuthenticated} from 'reducers';
import MatchOnAuthView from './MatchOnAuthView';

function mapStateToProps(state) {
  const props = {
    isAuthenticated:isAuthenticated(state)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(MatchOnAuthView);
