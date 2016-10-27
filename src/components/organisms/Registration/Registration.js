import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {isAuthenticated} from 'reducers';
import {register} from 'actions';
import RegistrationForm from './RegistrationForm';


function mapStateToProps(state) {

  const props = {
    isAuthenticated:isAuthenticated(state)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {register};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
