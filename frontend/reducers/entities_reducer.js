import { combineReducers } from 'redux';
import session from './session_reducer';
import todos from './todos_reducer';

export default combineReducers({
  session,
  todos
});
