import React from 'react';
// Components
import TodoList from './todo_list';
import TodoForm from './todo_form';

class TodoListIndex extends React.Component {

  render() {
    const { todoLists, receiveTodoLists } = this.props;
    const allTodoLists = todoLists.map(todo => (
        <TodoList
          key={`todo-list${todo_list.id}`}
          todoList={todoList}
          receiveTodoLists={ receiveTodoLists } />
      )
    );

    return(
      <div>
        <ul className="todo-lists">
          { allTodoLists }
        </ul>
        <TodoList receiveTodoList={ receiveTodoList }/>
      </div>
    );
  }
}

export default TodoListIndex;
