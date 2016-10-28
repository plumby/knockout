import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {isAuthenticated} from 'reducers';
import {register} from 'actions';
import LoginForm from './LoginForm';


function mapStateToProps(state,ownProps) {
  // console.log(state,ownProps);

  console.log();


  const props = {
    isAuthenticated:isAuthenticated(state),
    from:ownProps.location.state.from.pathname || '/'
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {register};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
