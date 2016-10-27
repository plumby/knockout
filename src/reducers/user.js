import types from 'actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case types.SIGN_IN:
    case types.REGISTER:
      return action.id;
    case types.SIGN_OUT:
      return null
    default:
      return state;
  }
};

export const getId = state => state

export const isAuthenticated = state => !!state

export default user;
