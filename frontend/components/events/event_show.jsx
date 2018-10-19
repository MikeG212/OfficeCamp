import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {

  componentDidMount(){
    this.props.requestEvent(this.props.match.params.eventId);
  }
  render(){
    return(
      <div>
        {this.props.event.description}
        {this.props.event.date}
        <Link to={'/'}>Index</Link>
      </div>
    );
  }
}

export default EventShow;
