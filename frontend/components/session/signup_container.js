import { connect } from 'react-redux';
import { createNewUser, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  const formType = "Sign up";
  const preposition = "for";
  const errors = state.errors.session;
  return { formType, preposition, errors };
};

const mapDispatchToProps = dispatch => ({
  action: (formUser) => dispatch(createNewUser(formUser)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
