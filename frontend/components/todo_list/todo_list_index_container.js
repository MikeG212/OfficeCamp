import { connect } from 'react-redux';
import TodoList from './todo_list';
import TodoListIndex from './todo_list_index';

// Actions
import { receiveTodoLists, receiveTodoList } from '../../actions/todo_list_actions';
import { allTodoLists } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todoLists: allTodoLists(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodoList: todoList => dispatch(receiveTodoList(todoList)),
  receiveTodoLists: todoLists => dispatch(receiveTodoLists(todoLists))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndex);
