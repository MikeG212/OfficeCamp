import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const requestEvents = () => (dispatch) => (
  EventAPIUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)))
);

export const requestEvent = (event) => (dispatch) => (
  EventAPIUtil.fetchEvent(event)
    .then(serverEvent => dispatch(receiveEvent(serverEvent)))
);

export const createEvent = (event) => (dispatch) => (
  EventAPIUtil.createEvent(event)
    .then(serverEvent => dispatch(receiveEvent(serverEvent)))
);

export const updateEvent = (event) => (dispatch) => (
  EventAPIUtil.updateEvent(event)
    .then(serverEvent => dispatch(receiveEvent(serverEvent)))
);

export const deleteEvent = (eventId) => (dispatch) => (
  EventAPIUtil.deleteEvent(eventId)
    .then(serverEvent => dispatch(removeEvent(eventId)))
);

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

const removeEvent = (eventId) => ({
  type: REMOVE_EVENT,
  eventId
});
