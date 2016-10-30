import { takeEvery /*, takeLatest*/ } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as api from 'api'
import types from 'actions/types';
import * as actions from 'actions'


function* loadPlayers() {
  try {
    const players=yield call(api.loadPlayers);
    yield put(actions.playersLoaded(players))
  } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* login(action) {
  try {
    const user = yield call(api.login, action.credentials);
    yield put(actions.loggedIn(user));
    yield loadPlayers();
  } catch (e) {
    yield put(actions.recordError(e.message));
  }
}

function* logout() {
  try {
    yield call(api.logout);
    yield put(actions.recordError('Logging out'));
    yield put(actions.loggedOut());
  } catch (e) {
    yield put(actions.recordError(e.message));
  }
}

function* register(action) {
  try {
    const user=yield call(api.register,action.registration)
    yield put(actions.registered(user))
    yield loadPlayers();
  } catch (e) {
    yield put(actions.recordError(e.message));
  }
}






function* mySaga() {
  yield takeEvery(types.REQUEST_LOGIN, login);
  yield takeEvery(types.REQUEST_LOGOUT, logout);
  yield takeEvery(types.REQUEST_REGISTRATION, register);
}

export default mySaga;
