import React from 'react'
import { Match } from 'react-router'
import { Header, PlayersPage, RegistrationPage, HomePage, LoginPage, MatchOnAuth,ErrorWindow } from 'components'
import style from './style.css'


const App = () => {
  return (
    <div className={style.test}>
      <ErrorWindow />
      <Header />
      <div className={style.mainBody}>
        <Match exactly pattern="/" component={HomePage} />
        <MatchOnAuth pattern="/players" component={PlayersPage} />
        <Match exactly pattern="/registration" component={RegistrationPage} />
        <Match pattern="/login" component={LoginPage} />
      </div>
    </div>
  )
}

export default App
