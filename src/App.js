import React from 'react';
 import './App.css';
  import TodoList from './components/TodoList';
 
 

function App() {
  return (
    <>
        
       <h1 className='title'>Todo App</h1>
      <div className='todo-app'>
        <TodoList />
      </div>
    </>

      
  );
}

export default App;
