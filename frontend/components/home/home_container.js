import React from 'react';
import { connect } from 'react-redux';
import Home from './home'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(null)(Home);
