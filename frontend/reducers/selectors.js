export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const allTodoLists = ( todoLists ) => {
  console.log(todoLists)
  return Object.keys(todoLists).map(id => todoLists[id]);

}


export const stepsByTodoId = ({ steps }, todo_id) => {
  const stepsByTodoId = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step)
  })
  return stepsByTodoId;
};
