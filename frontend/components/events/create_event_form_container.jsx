import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const msp = (state, ownProps) => {
  const event = {
    description: '',
    date: ''
  };
  const formType = "Create Event";
  return { event, formType };
};

const mdp = dispatch => ({
  submitEvent: (event) => dispatch(createEvent(event))
});

export default connect(msp, mdp)(EventForm);
