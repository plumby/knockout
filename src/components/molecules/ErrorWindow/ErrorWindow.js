import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getErrors} from 'reducers';
import {clearErrors} from 'actions';
import ErrorWindowView from './ErrorWindowView'


function mapStateToProps(state) {
  const props = {
    hasErrors:!!getErrors(state),
    errors:getErrors(state)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {clearErrors};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps,mapDispatchToProps)(ErrorWindowView);
