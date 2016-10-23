// import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {editPlayer} from 'actions';
import {getPlayers,isPlayerBeingEdited} from 'reducers'
import renderer from './renderer';

function mapStateToProps(state) {
  const props = {
    players:getPlayers(state),
    inEdit:isPlayerBeingEdited(state)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {editPlayer};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(renderer);
