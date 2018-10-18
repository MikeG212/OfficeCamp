import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { todo }) => ({
  removeTodo: () => dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
