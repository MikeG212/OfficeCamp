import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout}) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.email}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Login</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">OfficeCamp</h1>
      <div>
       { display }
       </div>
    </header>
  );
};
