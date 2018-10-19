import { connect } from 'react-redux';
import TodoList from './todo_list';
import TodoListIndex from './todo_list_index';

// Actions
import { requestTodoLists, requestTodoList, createTodoList, updateTodoList, deleteTodoList } from '../../actions/todo_list_actions';
import { allTodoLists } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todoLists: allTodoLists(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTodoLists: () => dispatch(requestTodoLists()),
  requestTodoList: todoList => dispatch(requestTodoList(todoList)),
  createTodoList: todoList => dispatch(createTodoList(todoList)),
  updateTodoList: todoList => dispatch(updateTodoList(todoList)),
  deleteTodoList: todoList => dispatch(deleteTodoList(todoList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndex);
