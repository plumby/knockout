import React from 'react'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'


const MatchOnAuth = ({ component: Component, isAuthenticated, ...rest }) => {

  return (
    <Match
      {...rest}
      render={
        props => (
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        )
      }
    />
  )
}
export default MatchOnAuth
