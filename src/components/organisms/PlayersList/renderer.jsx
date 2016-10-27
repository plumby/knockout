import React from 'react';
import {PlayerBox} from 'components'

const PlayersList = ({players,inEdit,actions}) => (
  <div className="player_box">
    Players

    {players.map((player) => (
      <PlayerBox
        key={player.name}
        editButton={!inEdit}
        player={player}
        actions={actions}
      />
    ))}
  </div>
)

export default PlayersList
