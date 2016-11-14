import React from 'react';


const Debug = ({obj}) => (
  <div>
    {JSON.stringify(obj)}
  </div>
)

export default Debug;

// <PlayersDebug players={players} />
