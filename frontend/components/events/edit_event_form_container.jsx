import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';


class EditEventForm extends React.Component {
  componentDidMount(){
    this.props.requestEvent(this.props.match.params.eventId);
  }

  render () {
    const { event, formType, submitEvent } = this.props;
    return (
      <EventForm
        event={event}
        formType={formType}
        submitEvent={submitEvent} />
    );
  }
}

const msp = (state, ownProps) => ({
  event: state.events[ownProps.match.params.eventId],
  formType: 'Update Event'
});

const mdp = dispatch => ({
  requestEvent: (id) => dispatch(requestEvent(id)),
  submitEvent: (post) => dispatch(updateEvent(post))
});

export default connect(msp, mdp)(EditEventForm);
