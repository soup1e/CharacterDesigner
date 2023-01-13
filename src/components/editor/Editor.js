import React, { useState } from 'react';

export default function Editor({ setHair, setTorso, setLegs, setShoes, setName }) {
  const [inputName, setInputName] = useState('');

  const handleName = (e) => {
    console.log(e.target.value);

    setName((currentState) => [...currentState, inputName]);
    setInputName('');
  };

  return (
    <div className="Editor">
      <div>
        <h1>Hair</h1>
        <select onChange={(e) => setHair(e.target.value)}>
          <option value="lebronhair">LeBron James&apos;s Hair</option>
          <option value="giannishair">Giannis&apos;s Hair</option>
          <option value="curryhair">Stephen Curry&apos;s Hair</option>
          <option value="jahair">Ja Morant&apos;s Hair</option>
          <option value="lukahair">Luka Dončić&apos;s Hair</option>
        </select>
      </div>
      <div>
        <h1>Torso</h1>
        <select onChange={(e) => setTorso(e.target.value)}>
          <option value="lebrontorso">LeBron James&apos;s Torso</option>
          <option value="giannistorso">Giannis&apos;s Torso</option>
          <option value="currytorso">Stephen Curry&apos;s Torso</option>
          <option value="jatorso">Ja Morant&apos;s Torso</option>
          <option value="lukatorso">Luka Dončić&apos;s Torso</option>
        </select>
      </div>
      <div>
        <h1>Legs</h1>
        <select onChange={(e) => setLegs(e.target.value)}>
          <option value="lebronlegs">LeBron James&apos;s Legs</option>
          <option value="giannislegs">Giannis&apos;s Legs</option>
          <option value="currylegs">Stephen Curry&apos;s Legs</option>
          <option value="jalegs">Ja Morant&apos;s Legs</option>
          <option value="lukalegs">Luka Dončić&apos;s Legs</option>
        </select>
      </div>
      <div>
        <h1>Shoes</h1>
        <select onChange={(e) => setShoes(e.target.value)}>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="reebok">Reebok</option>
          <option value="puma">Puma</option>
          <option value="nb">New Balance</option>
        </select>
      </div>
      <h1>Player Name</h1>
      <input value={inputName} type="text" onChange={(e) => setInputName(e.target.value)} />
      <button onClick={handleName}>Submit</button>
    </div>
  );
}
