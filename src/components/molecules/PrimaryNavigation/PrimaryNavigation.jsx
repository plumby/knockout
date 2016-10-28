import React from 'react'
import { Link } from 'components'

const PrimaryNavigation = (props) => {
  return (
    <nav {...props}>
      <Link to="/">Root</Link>
      <Link to="/players">Players</Link>
      <Link to="/registration">Registration</Link>
    </nav>
  )
}

export default PrimaryNavigation


// <li><StyledLink to="/" activeOnlyWhenExact activeClassName="active">Home</StyledLink></li>
// <li><StyledLink to="/sample-page" activeClassName="active">Sample page</StyledLink></li>
