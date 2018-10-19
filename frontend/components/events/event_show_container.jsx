import React from 'react';
import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const msp = (state, ownProps) => ({
  event: state.events[ownProps.match.params.eventId]
});

const mdp = (dispatch) => ({
  requestEvent: (id) => dispatch(requestEvent(id))
});

export default connect(msp, mdp)(EventShow);
