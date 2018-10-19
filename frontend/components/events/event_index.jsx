import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {

  componentDidMount() {
    this.props.requestEvents();
  }

  render() {
    const events = this.props.events.map(event => {
      return <EventIndexItem event={event}
        deleteEvent={this.props.deleteEvent}
        />;
    });

    return (
      <div>
        <ul>
        { events }
        </ul>
        <Link to={'/events/new'}>Form</Link>
    </div>
    );

  }
}

export default EventIndex;
