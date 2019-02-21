import React, { useState, useReducer } from 'react';
import { INITIAL_STATE } from './app.constant';
import todoReducer from './app.reducer';
import { addTodo, toggleTodo } from './app.action';

function App(props) {

  const [todo, setTodo] = useState('');
  const [list, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  function handleAddTodo() {
    dispatch(addTodo(todo));
    setTodo('');
  }

  function handleSetToDo(event) {
    setTodo(event.target.value);
  }

  function renderTodo() {
    return (
      list.todoList.map((data, index) => (
        <li 
          key={index}
          style={{ textDecoration: !data.active ? 'line-through' : 'none'}}
          onClick={() => dispatch(toggleTodo(index))}
        >{data.value}</li>
      ))
    )
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={todo} onChange={handleSetToDo}/>
      <button onClick={handleAddTodo}>Add</button>
      {renderTodo()}
    </div>
  );
}

export default App;
