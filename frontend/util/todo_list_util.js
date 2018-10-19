export const fetchTodoLists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todoLists'
  })
);

export const fetchTodoList = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/todoLists/${id}`
  })
);

export const deleteTodoList = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/todoLists/${id}`
  })
);

export const updateTodoList = (todoList) => (
  $.ajax({
    method: 'PATCH',
    url: `api/todoLists/${todoList.id}`,
    data: {
      todoList
    }
  })
);

export const createTodoList = (todoList) => (
  $.ajax({
    method: 'POST',
    url: 'api/todoLists',
    data: {
      todoList
    }
  })
);
