import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {isAuthenticated} from 'reducers';
import {login} from 'actions';
import LoginForm from './LoginForm';


function mapStateToProps(state,ownProps) {
  let from;

  try {
    from = ownProps.location.state.from.pathname
  } catch (e) {
    from = '/'
  }

  const props = {
    isAuthenticated:isAuthenticated(state),
    from
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {login};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
