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
  const [name, newName] = useState('');
  const [nameArray, setNameArray] = useState([]);

  const addName = () => {
    setNameArray((currentState) => [...currentState, name]);
    newName('');
  };

  const [headCount, headCountChanged] = useState(0);
  const [torsoCount, torsoCountChanged] = useState(0);
  const [legsCount, legsCountChanged] = useState(0);
  const [shoesCount, shoesCountChanged] = useState(0);

  const increment = (part) => {
    if (part === 'hair') {
      headCountChanged((state) => state + 1);
    } else if (part === 'torso') {
      torsoCountChanged((state) => state + 1);
    } else if (part === 'legs') {
      legsCountChanged((state) => state + 1);
    } else if (part === 'shoes') {
      shoesCountChanged((state) => state + 1);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Editor
          setHair={setHair}
          setTorso={setTorso}
          setLegs={setLegs}
          setShoes={setShoes}
          increment={increment}
          addName={addName}
          name={name}
          newName={newName}
        />
        <Stats
          headCount={headCount}
          torsoCount={torsoCount}
          legsCount={legsCount}
          shoesCount={shoesCount}
        />
        <Display hair={hair} torso={torso} legs={legs} shoes={shoes} nameArray={nameArray} />
      </div>
    </div>
  );
}

export default App;
