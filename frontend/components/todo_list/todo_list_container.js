import { connect } from 'react-redux';
import TodoList from './todo_list';

// Actions
import { requestTodos, requestTodo, createTodo, updateTodo, destroyTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
  requestTodos: todo => dispatch(requestTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: todo => dispatch(destroyTodo(todo))

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
