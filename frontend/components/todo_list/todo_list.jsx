import React from 'react';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, createTodo, updateTodo, errors } = this.props;
    debugger
    if (!this.props.todos) {
      return null;
    }
    const allTodoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          updateTodo={ updateTodo } />
      )
    );

    return(
      <div>
        <TodoForm createTodo={ createTodo } errors={ errors }/>
        <ul className="todo-list">
          { allTodoItems }
        </ul>
      </div>
    );
  }
}

export default TodoList;
