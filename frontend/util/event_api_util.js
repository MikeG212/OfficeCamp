export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: {
      event
    }
  })
);

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {
      event
    }
  })
);
