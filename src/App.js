import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Apod from './pages/Apod/Apod'
import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={Apod} path="/apod" />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
