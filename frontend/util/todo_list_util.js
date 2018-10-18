export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
);

export const fetchTodo = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/todos/${id}`
  })
);

export const deleteTodo = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${id}`
  })
);

export const updateTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url: `api/todos/${todo.id}`,
    data: {
      todo
    }
  })
);

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: {
      todo
    }
  })
);
