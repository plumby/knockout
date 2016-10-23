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
