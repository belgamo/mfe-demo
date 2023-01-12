import logo from "./logo.svg";
import "./App.css";

function App({ source }) {
  console.log(source);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b95269911e58d4b418309102d0daa0339097a2756244&rid=giphy.gif&ct=s"
          className="App-logo"
          alt="logo"
        />
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
