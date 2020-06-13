import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Apod from './pages/Apod'
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={Apod} path="/apod" />
      </div>
    </BrowserRouter>
  );
}

export default App;
