import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Tyler'
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World {firstName}</h1>
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
      </header>
    </div>
  );
}

export default App;
