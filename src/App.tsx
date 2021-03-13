import React from 'react';
import './theme/base.scss';
import Navigation from './components/Navigation/Navigation';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
