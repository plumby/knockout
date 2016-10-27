import * as api from 'api'
import uuid from 'uuid'
import types from './types';

export function addRandomNumber() {
  return {
    type: types.ADD_RANDOM_NUMBER,
    number:Math.floor((Math.random() * 10) + 1)
  };
}


export function editPlayer(playerId) {
  return {
    type: types.EDIT_PLAYER,
    playerId
  };
}

export function register(registration) {

  return dispatch => {
    api.register(registration)
      .then(dispatch({
        type:types.REGISTER,
        id:uuid.v4(),
        player:registration
      }))
  }
}
