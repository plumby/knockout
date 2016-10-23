import types from 'actions/types';

const players = (state = [], action) => {
  switch (action.type) {
    case types.ADD_PLAYER:
      return [...state,action.player];
    default:
      return state;
  }
};


export const getPlayers = (state) => state;

export default players;
