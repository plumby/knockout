import * as api from 'api'
// import uuid from 'uuid'
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
    .then((user) => {
      dispatch({
        type:types.REGISTER,
        player:user
      })
    })
  }
}


export function login(loginInfo) {
  return dispatch => {
    api.login(loginInfo)
    .then((user) => {
      dispatch({
        type:types.LOGIN,
        player:user
      })
    })
    .then(api.loadPlayers()
      .then((players) => {
        dispatch({
          type:types.LOAD_PLAYERS,
          players
        })
      })
    )
  }
}

export function logout() {
  return dispatch => {
    api.logout()
      .then(dispatch({
        type:types.LOGOUT
      }))
  }
}
