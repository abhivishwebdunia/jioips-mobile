import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'

import rootReducer from '../Reducers';

export default () => {
  return configureStore(rootReducer, rootSaga)
}
