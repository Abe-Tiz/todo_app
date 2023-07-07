import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
 
function TodoList() {
  const [todos, setTodos] = useState([]);


  //add new lists
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
       return false; 
    }
     

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
     
  };

  //update lists
  const update = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos( prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  //remove each row lists 
  const remove = id => {
    const removedArr = [...todos].filter( todo => todo.id !== id);
  
    setTodos(removedArr);
  };

  //complete lists 
  const complete = id => {
    let update = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(update);
  };

  //remove all lists
  const removeAll = () => {
    setTodos([]);
  };

  return (

    
    <>
     
  
      <h1>Add List's you want</h1>
     
      <TodoForm onremove={removeAll} onSubmit={addTodo} />
    
      <Todo
        todos={todos}
        complete={complete}
        remove={remove}
        update={update}
      />
    </>
  );
}

export default TodoList
;
