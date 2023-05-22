import React from 'react';
 import './App.css';
  import GroceryList from './components/GroceryList';
 
 

function App() {
  return (
    <>
        
       <h1 className='title'>Grocery App</h1>
      <div className='todo-app'>
        <GroceryList />
      </div>
    </>

      
  );
}

export default App;
