import { RECEIVE_TODO_LISTS,
         RECEIVE_TODO_LIST,
         REMOVE_TODO_LIST,
         TODO_LIST_ERROR } from '../actions/todo_list_actions';
import merge from 'lodash/merge';

const todoListsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_TODO_LISTS:
      action.todoLists.forEach( todoList => {
        nextState[todoList.id] = todoList;
      });
      return nextState;
    case RECEIVE_TODO_LIST:
      const newTodoList = {[action.todoList.id]: action.todoList};
      return merge({}, state, newTodoList);
    case REMOVE_TODO_LIST:
      nextState = merge({}, state);
      delete nextState[action.todoList.id];
      return nextState;
    case TODO_LIST_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default todoListsReducer;
