import types from 'actions/types';

const randomNumbers = (state = [], action) => {
  switch (action.type) {
    case types.ADD_RANDOM_NUMBER:
      return [...state,action.number];
    default:
      return state;
  }
};

export const getRandomNumbers = (state) => state;

export default randomNumbers;
