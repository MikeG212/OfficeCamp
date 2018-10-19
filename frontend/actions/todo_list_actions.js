import * as TodoListAPIUtil from '../util/todo_list_util';

export const RECEIVE_TODO_LISTS = "RECEIVE_TODO_LISTS";
export const RECEIVE_TODO_LIST = "RECEIVE_TODO_LIST";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";
export const TODO_LIST_ERROR = "TODO_LIST_ERROR";

export const requestTodoLists = () => (dispatch) => {
  debugger;
  return(
  TodoListAPIUtil.fetchTodoLists()
    .then(todoLists => dispatch(receiveTodoLists(todoLists)))
)};

export const requestTodoList = (todoList) => (dispatch) => (
  TodoListAPIUtil.fetchTodoList(todoList)
    .then(serverTodoList => dispatch(receiveTodoList(serverTodoList)))
);

export const createTodoList = (todoList) => (dispatch) => (
  TodoListAPIUtil.createTodoList(todoList)
    .then(serverTodoList => dispatch(receiveTodoList(serverTodoList)))
);

export const updateTodoList = (todoList) => (dispatch) => (
  TodoListAPIUtil.updateTodoList(todoList)
    .then(serverTodoList => dispatch(receiveTodoList(serverTodoList)))
);

export const deleteTodoList = (todoListId) => (dispatch) => (
  TodoListAPIUtil.deleteTodoList(todoListId)
    .then(serverTodoList => dispatch(removeTodoList(todoListId)))
);

const receiveTodoList = (todoList) => ({
  type: RECEIVE_TODO_LIST,
  todoList
});

const receiveTodoLists = (todoLists) => ({
  type: RECEIVE_TODO_LISTS,
  todoLists
});

const removeTodoList = (todoListId) => ({
  type: REMOVE_TODO_LIST,
  todoListId
});

export const todoListError = error => ({
  type: TODO_LIST_ERROR,
  error
})
