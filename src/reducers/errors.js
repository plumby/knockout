import types from 'actions/types';

const errors = (state = null, action) => {
  switch (action.type) {
    case types.ERROR:
      return action.errorText;
    case types.CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}

export const getErrors = (state) => state;

export default errors;
