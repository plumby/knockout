/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  const Reactotron = require('reactotron-react-js').default
  const { trackGlobalErrors } = require('reactotron-react-js')
  const tronsauce = require('reactotron-apisauce')
  const sagaReactotron = require('reactotron-redux-saga')
  const { reactotronRedux } = require('reactotron-redux')

  Reactotron
    .configure({ name: 'knockout', secure: false })
    .use(tronsauce())
    .use(reactotronRedux())
    .use(sagaReactotron())
    .use(trackGlobalErrors({ offline: false }))
    .connect()

  console.tron = Reactotron
}
