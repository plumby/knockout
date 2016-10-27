// import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {addRandomNumber} from 'actions';
// import {getRandomNumbers} from 'reducers';
import RegistrationForm from './RegistrationForm';

function mapStateToProps(state) {
  const props = {
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(renderer);
