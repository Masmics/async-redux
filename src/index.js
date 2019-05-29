import { applyMiddleware, createStore } from 'redux';
import logger from './middleware/logger';

function reducer(state = {}, action) {
  switch(action.type) {
    case 'Yo':
      return 'Adrian';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({
  type: 'Hi'
});
