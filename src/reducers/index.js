import { combineReducers } from 'redux';
import postReducer from './postreducer';
import changeReducer from './changeReducer';

const rootReducer = combineReducers({
  post: postReducer,
  log: changeReducer
});

export default rootReducer;