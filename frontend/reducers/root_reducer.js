import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import todos from './todos_reducer';
import steps from './steps_reducer';


const rootReducer = combineReducers({
  entities,
  session,
  errors,
  todos,
  steps
});

export default rootReducer;
