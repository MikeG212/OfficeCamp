export const allTodos = (state) => {
  //debugger
  return Object.values(state.todos);
}

export const allTodoLists = (state) => {
  //debugger
  return Object.values(state.entities.todoLists);

}


export const stepsByTodoId = ({ steps }, todo_id) => {
  const stepsByTodoId = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step)
  })
  return stepsByTodoId;
};
