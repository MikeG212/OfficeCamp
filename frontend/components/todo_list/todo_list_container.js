import { connect } from 'react-redux';
import TodoList from './todo_list';

// Actions
import { fetchTodos, fetchTodo, createTodo, updateTodo, destroyTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(fetchTodos()),
  requestTodos: todo => dispatch(fetchTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: todo => dispatch(destroyTodo(todo))

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
