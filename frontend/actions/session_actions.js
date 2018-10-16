import {
  postUser,
  postSession,
  deleteSession,
  deleteErrors
} from '../util/session_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const createNewUser = formUser => dispatch => (
  postUser(formUser)
  .then(serverUser => dispatch(receiveCurrentUser(serverUser))
, err => (
    dispatch(receiveErrors(err.responseJSON))
  )
));

export const login = formUser => dispatch => (
  postSession(formUser)
  .then(serverUser => dispatch(receiveCurrentUser(serverUser))
, err => (
    dispatch(receiveErrors(err.responseJSON))
  )
));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeErrors = () => ({
  type: CLEAR_ERRORS,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
