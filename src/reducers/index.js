// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import randomNumbers, * as fromRandomNumbers from './randomNumbers'
import players, * as fromPlayers from './players'

export const getRandomNumbers = (state) =>
  fromRandomNumbers.getRandomNumbers(state.randomNumbers);

export const getPlayers = (state) =>
  fromPlayers.getPlayers(state.players)

export const isPlayerBeingEdited = (state) =>
  fromPlayers.isPlayerBeingEdited(state.players);

const rootReducer = combineReducers({
  randomNumbers,
  players
});

export default rootReducer;
