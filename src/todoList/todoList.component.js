import React from 'react';
import ToDoCard from './todoCard/todoCard.components';
import './todoList.css';

function ToDoList(props) {

  function renderToDoList() {
    const a = [1, 2, 3];

    return (
      a.map((data, index) => (
        <ToDoCard key={index}>
          <input placeholder="Enter Title" className="ToDoList-input" />
          <textarea className="ToDoList-textarea" placeholder="Enter Notes" />
        </ToDoCard>
      )
      )
    );
  }
  return (
    <div className="ToDoList-grid">
      <ToDoCard customStyles="ToDoList-container">
          <p className="ToDoList-add-icon">+</p>
      </ToDoCard>
      {renderToDoList()}
    </div>
  )
}

export default ToDoList;
