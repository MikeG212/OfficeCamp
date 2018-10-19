import React from 'react';
// Components
import TodoList from './todo_list';
import TodoForm from './todo_form';

class TodoListIndex extends React.Component {
  componentDidMount() {
    //debugger
    this.props.requestTodoLists();
    //debugger
  }

  render() {
    const { todoLists, requestTodoLists, requestTodoList, createTodoList, updateTodoList, deleteTodoList } = this.props;
      //debugger
    if (!this.props.todoLists) {
      return null;
    }
    const allTodoLists = todoLists.map(todoList => (
        <TodoList
          key={`todo-list${todoList.id}`}
          todoList={todoList}
          updateTodoList={ updateTodoList } />
      )
    );

    return(
      <div>
        <ul className="todo-lists">
          { allTodoLists }
        </ul>
        <TodoForm createTodoList={ createTodoList } />
      </div>
    );
  }
}

export default TodoListIndex;
