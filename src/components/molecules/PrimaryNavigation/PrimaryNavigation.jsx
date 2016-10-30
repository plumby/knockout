import React from 'react'
import { Link,LogoutButton } from 'components'
import style from './style.css'

const PrimaryNavigation = (props) => {
  return (
    <nav {...props} className={style.navBarStyle}>
      <Link to="/">Root</Link>
      <Link to="/players">Players</Link>
      <Link to="/registration">Registration</Link>
      <LogoutButton className={style.logoutButton}>
        Log out
      </LogoutButton>
    </nav>
  )
}

export default PrimaryNavigation


// <li><StyledLink to="/" activeOnlyWhenExact activeClassName="active">Home</StyledLink></li>
// <li><StyledLink to="/sample-page" activeClassName="active">Sample page</StyledLink></li>
