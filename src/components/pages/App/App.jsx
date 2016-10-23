import React from 'react'
import { Match } from 'react-router'

import { Header, PlayersPage, RandomNumbersPage } from 'components'

const App = () => {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={PlayersPage} />
      <Match exactly pattern="/test" component={RandomNumbersPage} />
    </div>
  )
}

export default App
