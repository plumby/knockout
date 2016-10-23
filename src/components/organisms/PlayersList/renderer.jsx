import React from 'react';
import {PlayerBox} from 'components'

const players=[
  {
    id:'1',
    name:'Lorem ipsum dolor sit amet amet.',
    editButton:true
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



const PlayersList = () => (
  <div className="player_box">
    Players

    {players.map((player) => (
      <PlayerBox key={player.id} editButton={player.editButton} player={player} />
    ))}
  </div>
)

export default PlayersList
