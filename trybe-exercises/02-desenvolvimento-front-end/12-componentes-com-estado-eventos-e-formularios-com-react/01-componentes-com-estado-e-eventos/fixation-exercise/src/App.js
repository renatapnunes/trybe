import React from 'react';
import './App.css';
import ClickCounter from './clickCounter';

function App() {
  return (
    <div className="App">
      <h2>Contador de cliques</h2>
      <h5>O botão fica verde se o número de cliques for par e azul se não</h5>
      <ClickCounter />
    </div>
  );
}

export default App;
