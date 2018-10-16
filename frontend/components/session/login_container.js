import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  const formType = "Log in";
  const preposition = "to";
  const errors = state.errors.session;
  return { formType, preposition, errors };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (formUser) => dispatch(login(formUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
