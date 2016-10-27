// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import randomNumbers, * as fromRandomNumbers from './randomNumbers'
import forms from './forms'
import players, * as fromPlayers from './players'
import user, * as fromUser from './user'

export const getRandomNumbers = (state) =>
  fromRandomNumbers.getRandomNumbers(state.randomNumbers);

export const getPlayers = (state) =>
  fromPlayers.getPlayers(state.players)

export const isPlayerBeingEdited = (state) =>
  fromPlayers.isPlayerBeingEdited(state.players);

export const getCurrentUser = (state) =>
  fromPlayers.playerById(fromUser.getId(state))


export const isAuthenticated = state =>
  fromUser.isAuthenticated(state.user)

const rootReducer = combineReducers({
  randomNumbers,
  players,
  forms,
  user
});

export default rootReducer;
