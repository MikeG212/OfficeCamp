export const fetchTodoLists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
);

export const fetchTodoList = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/todos/${id}`
  })
);

export const deleteTodoList = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${id}`
  })
);

export const updateTodoList = (todo) => (
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
