import React from 'react';
import './display.css';
export default function Display({ hair, torso, legs, shoes, nameArray }) {
  const sloganItems = nameArray.map((names, i) => {
    return <li key={i}>{names}</li>;
  });

  return (
    <div className="display">
      <div className="names">
        <h1>Names:</h1>
        <ul>{sloganItems}</ul>
      </div>
      <div className="images">
        <img src={`/hair/${hair}.png`} alt={hair} />
        <img src={`/torso/${torso}.png`} alt={torso} />
        <img src={`/legs/${legs}.png`} alt={legs} />
        <img src={`/shoes/${shoes}.png`} alt={shoes} />
      </div>
    </div>
  );
}
