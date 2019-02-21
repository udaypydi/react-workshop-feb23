import React from 'react';
import ToDoList from './todoList/todoList.component';
import Header from './header/header.component';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
