import { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeContext } from "./theme-context";

function App() {
  const { theme, dark, toggle } = useContext(ThemeContext);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }}
        >
          Toggle to {!dark ? 'Dark' : 'Light'}
        </button>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
