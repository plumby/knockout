import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {logout} from 'actions';
import {isAuthenticated} from 'reducers';
import LogoutButtonView from './LogoutButtonView'


function mapStateToProps(state) {
  const props = {
    isAuthenticated:isAuthenticated(state)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {logout};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButtonView);
