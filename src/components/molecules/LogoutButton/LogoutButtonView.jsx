import React from 'react';

const LogoutButtonView = ({actions,isAuthenticated,...props}) => {
  if (isAuthenticated) {
    return (<button {...props} onClick={() => actions.logout()} />)
  }
  return (<div />)
}

export default LogoutButtonView;
