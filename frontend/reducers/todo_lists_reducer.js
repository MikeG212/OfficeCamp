import { RECEIVE_TODO_LISTS,
         RECEIVE_TODO_LIST,
         REMOVE_TODO_LIST,
         TODO_LIST_ERROR } from '../actions/todo_list_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_TODO_LISTS:
      action.todos.forEach( todo => {
        nextState[todo_list.id] = todo_list;
      });
      return nextState;
    case RECEIVE_TODO_LIST:
      const newTodoList = {[action.todo_list.id]: action.todo_list};
      return merge({}, state, newTodoList);
    case REMOVE_TODO_LIST:
      nextState = merge({}, state);
      delete nextState[action.todo_list.id];
      return nextState;
    case TODO_LIST_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default todosReducer;
