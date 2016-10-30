import { combineReducers } from 'redux';
import types from 'actions/types';

const initPlayers = {
}



const allPlayers = (state = initPlayers, action) => {
  switch (action.type) {
    case types.LOADED_PLAYERS:
      return {...state,...action.players}
    case types.REGISTERED:
      return {...state,[action.id]:{ ...action.player,id:action.id}}
    default:
      return state;
  }
};

const playerBeingEdited = (state = null, action) => {
  switch (action.type) {
    case types.EDIT_PLAYER:
      if (state === action.playerId) {
        return null;
      }
      return action.playerId;
    default:
      return state;
  }
}


export const getPlayers = (state) =>
  Object.entries(state.allPlayers).map(([id,player]) => {
    return ({
      ...player,
      id,
      beingEdited:id===state.playerBeingEdited})
  })


export const isPlayerBeingEdited = (state) => state.playerBeingEdited!==null;

export const playerById = (state, id) => state.allPlayers[id];

export default combineReducers({
  playerBeingEdited,
  allPlayers
});
