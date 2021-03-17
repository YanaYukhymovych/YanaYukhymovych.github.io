import React from 'react';
import './theme/base.scss';
import { Element } from 'react-scroll';
import Navigation from './components/Navigation/Navigation';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';

function App() {
  const sections = {
    intro: <Intro />,
    about: <About />,
    skills: <Skills />,
    portfolio: <Portfolio />,
    contacts: <Contacts />,
  };

  // useEffect(() => {
  //   Events.scrollEvent.register('begin', function (arg1, arg2) {
  //
  //     console.log("begin", arg2);
  //   });
  //
  //   Events.scrollEvent.register('end', function () {
  //     console.log("end", arguments);
  //   });
  // })

  return (
    <div className="App">
      <Navigation />

      {Object.keys(sections).map((section, index) => (
        <Element key={index} name={section}>
          {sections[section]}
        </Element>
      ))}
    </div>
  );
}

export default App;
