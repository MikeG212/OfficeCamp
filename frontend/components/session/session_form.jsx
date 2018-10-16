import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/')); //renders a new page if the signup works
  }

  renderLink() {
    if (this.props.formType === "Sign up") {
      return (
        <div>
         <Link className="form-redirect" to="/login">Login</Link>
        </div>
      );
    } else {
      return (
        <div>
         <Link className="form-redirect" to="/signup">Sign up</Link>
        </div>
      );
    }
  }

  demoLogin() {
    this.setState({
        email: 'mscott@dundermifflin.com',
        password: 'starwars',
      },
      function(){this.props.action(this.state)
        .then(() => this.props.history.push('/'));
    });
  }

  renderNameInput() {
    if (this.props.formType === "Sign up") {
      return (
        <div>
        <label>
          First Name
          <input className="input-login"
            type="text"
            value={this.state.first_name}
            onChange={this.handleInput('first_name')}
          />
        </label>
          <label>
            Last Name
            <input className="input-login"
              type="text"
              value={this.state.last_name}
              onChange={this.handleInput('last_name')}
            />
          </label>
        </div>
      );
    } else {
      return null;
    }
  }

  render(){
    return (
      <div className="session-form" id="login">
        <img className="oc-logo" src={window.images.login}/>
        <div className="session-form-white">
        <h2 className="session-form-header">{this.props.formType} {this.props.preposition} OfficeCamp</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
                Email or username
                <input className="input-login"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                />
            </label>
            {this.renderNameInput()}
            <label>
                Password
                <input className="input-login"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                />
              </label>
            <button className="login-button">{this.props.formType}</button>
            {this.renderLink()}
          </form>
          <button onClick={() => this.demoLogin()} className="demo-button">Demo Login</button>
        </div>
      </div>
    );
  }
}

export default SessionForm;
