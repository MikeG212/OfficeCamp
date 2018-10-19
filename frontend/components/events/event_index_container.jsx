import { connect } from 'react-redux';
import { requestEvents, deleteEvent } from '../../actions/event_actions';
import EventIndex from './event_index';

const msp = (state) => ({
  events: Object.values(state.events)
});

const mdp = dispatch => ({
  requestEvents: () => dispatch(requestEvents),
  deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
});

export default connect(msp, mdp)(EventIndex);
