import React, { useState } from 'react';

function App(props) {

  const [name, setName] = useState('React');

  function handleUserNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Welcome to {name} Workshop</h1>
      <input type="text" value={name} onChange={handleUserNameChange}/>
    </div>
  );
}

export default App;
