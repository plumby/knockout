// import * as api from 'api'
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

// export function register(registration) {
//
//   return dispatch => {
//     api.register(registration)
//     .then((user) => {
//       dispatch({
//         type:types.REGISTER,
//         player:user
//       })
//     })
//   }
// }


export function register(registration) {
  return {
    type: types.REQUEST_REGISTRATION,
    registration
  }
}

export function registered(user) {
  return {
    type: types.REGISTERED,
    user
  }
}




export function login(credentials) {
  return {
    type: types.REQUEST_LOGIN,
    credentials
  }
}

export function loggedIn(user) {
  return {
    type: types.LOGGED_IN,
    user
  }
}

export function playersLoaded(players) {
  return {
    type: types.LOADED_PLAYERS,
    players
  }
}

export function logout() {
  return {
    type: types.REQUEST_LOGOUT
  }
}


export function loggedOut() {
  return {
    type: types.LOGGED_OUT
  }
}
