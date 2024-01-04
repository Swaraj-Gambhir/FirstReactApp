import { useState } from 'react';
import React from 'react';
import Navigation from "./components/Navigation.jsx"
import "./App.css";
import Hero from './components/Hero.jsx';
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  )
}

export default App;
