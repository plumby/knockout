import React from 'react'
import { Match } from 'react-router'

import { Header, PlayersPage, RegistrationPage, HomePage, LoginPage, MatchOnAuth } from 'components'

const App = () => {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={HomePage} />
      <MatchOnAuth pattern="/players" component={PlayersPage} />
      <Match exactly pattern="/registration" component={RegistrationPage} />
      <Match pattern="/login" component={LoginPage} />
    </div>
  )
}

export default App
