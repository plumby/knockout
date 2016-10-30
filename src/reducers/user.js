import types from 'actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN:
    case types.REGISTER:
      return action.player.id;
    case types.LOGOUT:
      return null
    default:
      return state;
  }
};

export const getId = state => state

export const isAuthenticated = state => !!state

export default user;
