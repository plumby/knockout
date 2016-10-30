import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers';
import mySaga from 'sagas/loginSaga'



export default function configureStore(initialState) {

  const sagaMiddleware = createSagaMiddleware()

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
  ));

  sagaMiddleware.run(mySaga)

  return store;
}
