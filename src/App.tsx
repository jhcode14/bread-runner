import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/introduction">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path ="/game" element={<Game />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Introduction() {
  return(
    <div>introduction</div>
  )
}

function AboutUs() {
  return(
    <div>about us</div>
  )
}

function Game() {
  return(
    <div>game</div>
  )
}

function Landing() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  )
}

export default App;
