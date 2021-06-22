import logo from './logo.svg';
import './App.css';

const tarefas = ['Instalar npm', 'Aprender React', 'Entender Componentes', 'Programar utilizando React'];
const Task = (tarefas) => tarefas.map((tarefa) => <li>{tarefa}</li>);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>{Task(tarefas)}</ul>
      </header>
    </div>
  );
}

export default App;
