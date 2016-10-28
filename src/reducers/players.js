import { combineReducers } from 'redux';
import types from 'actions/types';

const playersList=[
  {
    id:'1',
    name:'Lorem ipsum dolor sit amet amet.'
  },
  {
    id:'2',
    name:'Nulla bibendum purus massa nunc.'
  },
  {
    id:'3',
    name:'Fusce a lacinia magna cras amet.'
  },
  {
    id:'4',
    name:'Rhoncus magna.'
  }
]



const initPlayers = {
  '1': {
    name:'Lorem ipsum dolor sit amet amet.'
  },
  '2':{
    name:'Nulla bibendum purus massa nunc.'
  },
  '3':
  {
    name:'Fusce a lacinia magna cras amet.'
  },
  '4':
  {
    name:'Rhoncus magna.'
  }
}



const allPlayers = (state = initPlayers, action) => {
  switch (action.type) {
    case types.REGISTER:
      return {...state,[action.id]:{ ...action.player,id:action.id}}
    default:
      return state;
  }
};



const players = (state = playersList, action) => {
  switch (action.type) {
    case types.REGISTER:
      return [...state,action.player];
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


// export const getPlayers = (state) =>
//  state.players.map((player) =>
//    ({...player,
//     beingEdited:player.id===state.playerBeingEdited}))


export const isPlayerBeingEdited = (state) => state.playerBeingEdited!==null;

export const playerById = (state, id) => state.allPlayers[id];

export default combineReducers({
  players,
  playerBeingEdited,
  allPlayers
});


players;
