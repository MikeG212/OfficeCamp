import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.submitEvent(this.state);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Description
        <input
          type="text"
          value={this.state.description}
          onChange={this.update('description')}
        />
        </label>
        <label>
          Date
        <textarea
          type="date"
          value={this.state.date}
          onChange={this.update('date')}
        />
        </label>
        <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default withRouter(EventForm);
