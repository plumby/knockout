import React from 'react'
import { Match } from 'react-router'

import { Header, PlayersPage, RegistrationPage, LoginPage, MatchOnAuth } from 'components'

const App = () => {
  return (
    <div>
      <Header />
      <MatchOnAuth exactly pattern="/" component={PlayersPage} />
      <Match exactly pattern="/registration" component={RegistrationPage} />
      <Match pattern="/login" component={LoginPage} />
    </div>
  )
}

export default App
