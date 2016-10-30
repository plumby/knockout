import types from 'actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case types.LOGGED_IN:
    case types.REGISTERED:
      return action.user.id;
    case types.LOGGED_OUT:
      return null
    default:
      return state;
  }
};

export const getId = state => state

export const isAuthenticated = state => !!state

export default user;
