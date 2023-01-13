import React from 'react';
import { useState } from 'react';

import './App.css';
import Editor from './components/editor/Editor.js';
import Stats from './components/stats/Stats.js';
import Header from './components/header/Header.js';
import Display from './components/display/Display.js';

function App() {
  const [hair, setHair] = useState('lebronhair');
  const [torso, setTorso] = useState('lebrontorso');
  const [legs, setLegs] = useState('lebronlegs');
  const [shoes, setShoes] = useState('nike');
  const [name, setName] = useState('lebron');

  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Editor
          setHair={setHair}
          setTorso={setTorso}
          setLegs={setLegs}
          setShoes={setShoes}
          setName={setName}
        />
        <Stats />
        <Display hair={hair} torso={torso} legs={legs} shoes={shoes} name={name} />
      </div>
    </div>
  );
}

export default App;
